import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import GifItem from '../../components/GifItem/GifItem';
import Loading from '../../components/Loading/Loading';
import { getGifDataSaga } from '../../redux/actions/gifData.action';

import './Home.scss';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

  const gifData = useSelector(state => state.gifData.data ? state.gifData.data : []);
  const loadMore = useSelector(state => state.gifData.loadMore)

  const dispatch = useDispatch();

  const observer = useRef();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setLoading(true);
      dispatch(getGifDataSaga(pageNumber));
    }
    return () => mounted = false;
  }, [pageNumber])

  useEffect(() => {
    // close loading once received new gifData
    // the loading will last in 1s
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [JSON.stringify(gifData)])


  // Observe the last element to load more item
  const lastGifElement = useCallback((node) => {
    if (loading) return;
    // Do not observe the changes of the previous IntersectionObserver 
    if (observer.current) observer.current.disconnect();
    // Set the ref by a new IntersectionObserver
    observer.current = new IntersectionObserver(entries => {
      // ensure that can load more
      if (entries[0].isIntersecting && loadMore) {
        setPageNumber(pre => pre + 1);
      }
    })
    // Add the element for observing
    if (node) observer.current.observe(node)
  }, [loading, loadMore])

  const getClassName = (index) => {
    if (index === selectedIndex) {
      return 'selected';
    }
    return '';
  }

  return (
    <div className="home">
      {gifData && gifData.map((item, index) => {
        if (gifData.length === index + 1) {
          // trigger function infinite scroll, load more data
          return <GifItem
            onCloseFullScreen={() => setSelectedIndex(false)}
            onOpenFullScreen={() => { setSelectedIndex(index); }}
            gifClass={getClassName(index)}
            key={`gif_${index}`}
            // ref={lastGifElement}
            ref={lastGifElement}
            data={item} />
        } else {
          // without function infinite scroll
          return <GifItem
            onCloseFullScreen={() => setSelectedIndex(false)}
            onOpenFullScreen={() => setSelectedIndex(index)}
            gifClass={getClassName(index)}
            key={`gif_${index}`}
            data={item} />
        }
      })}
      <Loading loading={loading} />
    </div>
  );
};

export default Home;
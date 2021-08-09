import React, { forwardRef } from 'react';

import User from '../../images/user.svg';
import './GifItem.scss';

const GifItem = forwardRef(({ data, refData, gifClass, onOpenFullScreen, onCloseFullScreen }, ref) => {
    const onCloseImage = (e) => {
        e.stopPropagation();
        onCloseFullScreen();
    }
    return (
        <div data-testid="gif" onClick={onOpenFullScreen} className={`gif ${gifClass}`} ref={ref}>
            <div className="gif__img-container">
                <span data-testid="gif-close" className="close-btn" onClick={onCloseImage}></span>
                <img alt={data.user ? data.user.display_name : 'No data'} src={data.url} alt="" />
            </div>

            <div className="gif__user-info">
                <img alt={data.user ? data.user.display_name : 'No data'} src={data.user ? data.user.avatar_url : User} alt="" />
                <span className="gif__user-name">
                    {data.user ? data.user.display_name : 'No data'}
                </span>
            </div>
            <span className="gif__animation first"></span>
            <span className="gif__animation second"></span>
            <span className="gif__animation third"></span>
            <span className="gif__animation fourth"></span>
        </div>
    );
});

export default GifItem;
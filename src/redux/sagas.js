import { call, takeLatest, put } from '@redux-saga/core/effects';
import { getImageList } from '../apis/common.api';
import * as types from './types';
import store from './store';

function* getNewGif(action) {
    let gifData = yield call(getImageList, action.payload);
    let previousGif = store.getState().gifData.data;
    if (gifData) {
        // filter some fields really need, then concat with the old data, allow infinite scroll
        let data = [...previousGif, ...gifData.data.map(item => ({ url: item.images['480w_still'].url, user: item.user }))]
        yield put({
            type: types.SET_GIF,
            payload: { data, loadMore: data.length > 0 }
        })
    } else {
        // block infinite scroll
        yield put({
            type: types.SET_GIF,
            payload: { data: previousGif, loadMore: false }
        })
    }
}

export default function* rootSaga() {
    yield takeLatest(types.GET_GIF_SAGA, getNewGif);
}
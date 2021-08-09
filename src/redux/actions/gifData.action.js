import * as types from '../types';
export const getGifDataSaga = (data) => ({
    type: types.GET_GIF_SAGA,
    payload: data
})
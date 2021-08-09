import * as types from '../types';
export const initialState = {
    data: [],
    loadMore: true
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_GIF:
            return action.payload;
        default:
            return state;
    }
}
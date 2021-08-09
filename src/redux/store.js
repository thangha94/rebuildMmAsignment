import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
import reducers from './reducers/index.reducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
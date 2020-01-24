import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './rootSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, thunk));

export default createStore(reducers, {}, middleware);

sagaMiddleware.run(rootSaga);

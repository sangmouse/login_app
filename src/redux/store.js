import { createStore, compose, applyMiddleware } from "redux";
import rootSaga from "./sagas/index";
import rootReducers from "./reducers/index";
import createSagaMiddlewave from 'redux-saga'

const sagaMiddlewave = createSagaMiddlewave();
const store = compose(
  applyMiddleware(sagaMiddlewave),
  window.devToolsExtension && window.devToolsExtension())(
  createStore
)(rootReducers);


sagaMiddlewave.run(rootSaga)

export default store;

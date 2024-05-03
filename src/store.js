// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; // Import Redux Saga
import rootReducer from './reducers';
import rootSaga from './sagas'; // Import your root saga

const sagaMiddleware = createSagaMiddleware(); // Create Saga middleware

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga); // Run your root saga

export default store;

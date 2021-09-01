import{createStore}from 'redux';
import {rootReducers} from './reducer';

 export const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENTION__&& window REDUX_DEVTOOLS_EXTENTION__())



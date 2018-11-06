import { combineReducers } from 'redux';

import typeStatesReducer from './types';
import productStatesReducer from './products';
import { arrayCartStatesReducer, calculatingSaleProductReducer } from './arrayCart.js';
import loginStateReducer from './isLogin';
import selectTabStateReducer from './selectedTab';
import arraySearchStatesReducer from './arrSearch';

export default combineReducers({
    typeStates: typeStatesReducer,
    productStates: productStatesReducer,
    arrayCartStates: arrayCartStatesReducer,
    calculatingSale: calculatingSaleProductReducer,
    loginState: loginStateReducer,
    selectTabState: selectTabStateReducer,
    arraySearchState: arraySearchStatesReducer
});

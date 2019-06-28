//import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducers/index';
import { middlewares } from '../store/index.js';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[testid='${attr}']`);
    return wrapper;
};

// export const checkProps = (component, expectedProps) => {
//     const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
//     return propsErr;
// };

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};
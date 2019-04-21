import { FETCH_CARS_WITH_DIST } from '../actions/types';

const initialState = {
    items: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CARS_WITH_DIST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
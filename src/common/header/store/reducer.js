import * as actionTypes from './actionTypes';

const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return {
                focused: true
            }
        case actionTypes.SEARCH_BLUR:
            return {
                focused: false
            }
    }
    return state;
}
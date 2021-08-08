import * as actionTypes from "../actions/actionsTypes";

const headerHeightReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.HEADER_HEIGHT:
            return action.payload
        default:
            return state
    }
};

export default headerHeightReducer;
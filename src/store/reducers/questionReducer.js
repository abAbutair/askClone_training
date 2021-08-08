import * as actionTypes from "../actions/actionsTypes";

const questionReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.GET_QUESTION:
            return action.payload

        default:
            return state
    }
};

export default questionReducer;
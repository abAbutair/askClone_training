import * as actionTypes from "../../actions/actionsTypes";

const loginFetchReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_FETCH:
            return action.payload
        default:
            return state
    }
};

export default loginFetchReducer;
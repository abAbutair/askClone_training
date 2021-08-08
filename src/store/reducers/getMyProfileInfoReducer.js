import * as actionTypes from "../actions/actionsTypes";

const getMyProfileInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_MY_PROFILE_INFO:
            return action.payload
        default:
            return state
    }
};

export default getMyProfileInfoReducer;
import * as actionTypes from "../../actions/actionsTypes";

const registrationFetchReducer = (state = 'Not Registered', action) => {
    switch (action.type) {
        case actionTypes.REGISTRATION_FETCH:
            return action.payload
        default:
            return state
    }
};

export default registrationFetchReducer;
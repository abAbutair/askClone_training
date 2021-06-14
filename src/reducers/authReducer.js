import {REGISTRATION} from "../actions/types";

export const registrationReducer = (state = 'Not Registered', action) => {
    switch (action.type) {
        case REGISTRATION:
            return action.payload
        default:
            return state
    }
};
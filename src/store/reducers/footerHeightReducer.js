import * as actionTypes from "../actions/actionsTypes";

const footerHeightReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.FOOTER_HEIGHT:
            return action.payload
        default:
            return state
    }
};

export default footerHeightReducer;
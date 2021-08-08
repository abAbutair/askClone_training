import * as actionTypes from "./actionsTypes";

const footerHeight = (footerHeight) => {
    return {
        type: actionTypes.FOOTER_HEIGHT,
        payload: footerHeight
    }
};

export default footerHeight;
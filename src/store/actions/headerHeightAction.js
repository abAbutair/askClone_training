import * as actionTypes from "./actionsTypes";

const headerHeight = (headerHeight) => {
    return {
        type: actionTypes.HEADER_HEIGHT,
        payload: headerHeight
    }
};

export default headerHeight;
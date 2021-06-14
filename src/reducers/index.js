import {combineReducers} from "redux";
import {headerReducer, footerReducer} from "./headerFooterReducer";
import {registrationReducer} from "./authReducer";

export default combineReducers({
    headerHeight: headerReducer,
    footerHeight: footerReducer,
    registrationStatus: registrationReducer
});
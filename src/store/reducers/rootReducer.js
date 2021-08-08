import {combineReducers} from "redux";

import headerHeightReducer from "./headerHeightReducer";
import footerHeightReducer from "./footerHeightReducer";

import registrationFetchReducer from "./authReducers/registrationFetchReducer";
import loginFetchReducer from "./authReducers/loginFetchReducer";

import questionsReducer from "./questionsReducer";
import questionReducer from "./questionReducer";
import newsfeedReducer from "./newsfeedReducer";
import yourAnswerReducer from "./yourAnswersReducer";
import userAnswerReducer from "./userAnswersReducer";
import getMyProfileInfoReducer from "./getMyProfileInfoReducer";

const rootReducer = combineReducers({
    headerHeight: headerHeightReducer,
    footerHeight: footerHeightReducer,

    registrationStatus: registrationFetchReducer,
    loginUserData: loginFetchReducer,

    questions: questionsReducer,
    oneQuestion: questionReducer,

    newsfeed: newsfeedReducer,
    yourAnswers: yourAnswerReducer,
    userAnswers: userAnswerReducer,
    myProfileInfo: getMyProfileInfoReducer
});

export default rootReducer;
import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const askUserAction = (userToAskId, formValues) => async dispatch => {
    const body = JSON.stringify({
        question: formValues.askUser,
        isAnonymous: formValues.checkAnonymous ? formValues.checkAnonymous : false
    });

    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/askquestion/${userToAskId}`,
        "POST",
        body,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.ASK_USER,
            payload: data
        });
    }
};

export default askUserAction;
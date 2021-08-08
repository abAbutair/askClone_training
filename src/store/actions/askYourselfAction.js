import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const askYourselfAction = (formValues, isAnonymous) => async dispatch => {

    const body = JSON.stringify({
        question: formValues.askYourself,
        isAnonymous: isAnonymous
    });

    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/question/askyourself`,
        "POST",
        body,
        "application/json"
    );

    console.log('askYourselfAction error', error)

    if (data) {
        dispatch({
            type: actionTypes.ASK_YOURSELF,
            payload: data
        });
    }
};

export default askYourselfAction;
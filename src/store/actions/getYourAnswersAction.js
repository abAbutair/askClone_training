import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const getYourAnswersAction = () => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/getyouranswers`,
        "GET",
        null,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.GET_YOUR_ANSWERS,
            payload: data.payload
        });
    }
};

export default getYourAnswersAction;
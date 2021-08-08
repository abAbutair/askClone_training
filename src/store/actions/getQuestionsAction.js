import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const getQuestions = () => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/getquestions`,
        "GET",
        null,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.GET_QUESTIONS,
            payload: data.payload
        });
    }
};

export default getQuestions;
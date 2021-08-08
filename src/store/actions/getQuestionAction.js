import * as actionTypes from "./actionsTypes";

import fetchFn from "../../helpers/fetchFn";

const getQuestion = (questionId) => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/getquestion/${questionId}`,
        "GET",
        null,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.GET_QUESTION,
            payload: data.payload
        });
    }
};


export default getQuestion;
import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const getUserAnswersAction = (id) => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/getanswers/${id}`,
        "GET",
        null,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.GET_USER_ANSWERS,
            payload: data.payload
        });
    }
};

export default getUserAnswersAction;
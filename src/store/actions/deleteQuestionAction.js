import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const deleteQuestion = (id) => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/deletequestion/${id}`,
        "DELETE",
        null,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type:  actionTypes.DELETE_QUESTIONS,
            payload: id
        });
    }
};

export default deleteQuestion;
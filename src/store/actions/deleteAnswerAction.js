import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const deleteAnswerAction = (id) => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/removeAnswer/${id}`,
        "DELETE",
        null,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.DELETE_ANSWER,
            payload: id
        });
    }
};

export default deleteAnswerAction;
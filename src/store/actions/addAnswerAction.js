import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";
import history from "../../helpers/history";

const addAnswerAction = (formValues, uploadedImage, questionId) => async dispatch => {
    const body = JSON.stringify({
        questionId: questionId,
        answer: formValues.questionAnswer,
        imagePath: uploadedImage
    });

    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/questions/addanswer/${questionId}`,
        "PUT",
        body,
        "application/json"
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.ANSWER_QUESTION,
            payload: questionId
        });

        history.push('/questions');
    }
};


export default addAnswerAction;
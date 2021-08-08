import * as actionTypes from "../actions/actionsTypes";

const questionsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_QUESTIONS:
            const newQuestions = {};
            action.payload.forEach(question => {
                newQuestions[question.question_id] = question;
            });

            return {...newQuestions, ...state}

        case actionTypes.ANSWER_QUESTION:
            const stateAfterAnswer = {};

            for (let [key, value] of Object.entries(state)) {
                if (!(key === action.payload)) {
                    stateAfterAnswer[key] = value;
                }
            }

            return {...stateAfterAnswer}

        case actionTypes.DELETE_QUESTIONS:
            const stateAfterDelete = {};

            for (let [key, value] of Object.entries(state)) {
                if (!(key === action.payload)) {
                    stateAfterDelete[key] = value;
                }
            }

            return {...stateAfterDelete}

        default:
            return state
    }
};

export default questionsReducer;
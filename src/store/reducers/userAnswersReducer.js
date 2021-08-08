import * as actionTypes from "../actions/actionsTypes";

const userAnswerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_ANSWERS:
            const userAnswers = {};
            action.payload.forEach(oneAnswer => {
                userAnswers[oneAnswer.question_id] = oneAnswer;
            });

            return {...userAnswers, ...state}

        default:
            return state
    }
};

export default userAnswerReducer;
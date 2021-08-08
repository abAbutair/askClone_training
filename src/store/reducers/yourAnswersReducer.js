import * as actionTypes from "../actions/actionsTypes";

const yourAnswerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_YOUR_ANSWERS:
            const yourAnswers = {};
            action.payload.forEach(oneAnswer => {
                yourAnswers[oneAnswer.question_id] = oneAnswer;
            });

            return {...yourAnswers, ...state}

        case actionTypes.DELETE_ANSWER:
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

export default yourAnswerReducer;
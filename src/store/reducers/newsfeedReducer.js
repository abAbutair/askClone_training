import * as actionTypes from "../actions/actionsTypes";

const newsfeedReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_NEWSFEED:
            const newNewsfeed = {};
            action.payload.forEach(oneNewsfeed => {
                newNewsfeed[oneNewsfeed.question_id] = oneNewsfeed;
            });

            return {...newNewsfeed, ...state}

        default:
            return state
    }
};

export default newsfeedReducer;
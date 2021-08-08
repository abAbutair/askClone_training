import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const getNewsfeedAction = () => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/newsfeed`,
        "GET",
        null,
        "application/json"
    );

    // console.log(data);
    console.log('getNewsfeedAction error', error)

    if (data) {
        dispatch({
            type: actionTypes.GET_NEWSFEED,
            payload: data.payload
        });
    }
};

export default getNewsfeedAction;
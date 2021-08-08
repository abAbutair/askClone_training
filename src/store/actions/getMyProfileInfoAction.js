import * as actionTypes from "./actionsTypes";
import fetchFn from "../../helpers/fetchFn";

const getMyProfileInfoAction = (userId) => async dispatch => {
    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/user/getuserandimage/${userId}`,
        "GET",
        null,
        "application/json"
    );

    console.log(error);

    dispatch({
        type: actionTypes.GET_MY_PROFILE_INFO,
        payload: data.payload[0]
    });
};

export default getMyProfileInfoAction;
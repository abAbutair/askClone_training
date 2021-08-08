import * as actionTypes from "../actionsTypes";
import history from "../../../helpers/history";

import {setItemInLocalStorage} from "../../../helpers/localStorage";

const loginFetchAction = (formValues) => async dispatch => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: formValues.loginEmail,
                password: formValues.loginPassword,
                rememberMe: true
            })
        });

        const data = await response.json();

        if (!(Object.keys(data).length === 0)) {
            console.log(data)
            setItemInLocalStorage("loginState", true);
            setItemInLocalStorage("accessToken", data.accessToken);
            setItemInLocalStorage("refreshToken", data.refreshToken);
            setItemInLocalStorage("userId", data.userId);

            dispatch({
                type: actionTypes.LOGIN_FETCH,
                payload: data
            });

            history.push('/newsfeed');
        }

    } catch (error) {
        console.log(error)
    }
};

export default loginFetchAction;
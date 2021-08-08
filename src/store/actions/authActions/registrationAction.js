import * as actionTypes from "../actionsTypes";
import fetchFn from "../../../helpers/fetchFn";

const registrationFetch = (formValues) => async dispatch => {
    const body = JSON.stringify({
        username: formValues.registerUsername,
        email: formValues.registerEmail,
        password: formValues.registerPassword,
        confirmPassword: formValues.registerConfirmPassword
    });

    const [data, error] = await fetchFn(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        "POST",
        body,
        null
    );

    console.log(error);

    if (data) {
        dispatch({
            type: actionTypes.REGISTRATION_FETCH,
            payload: data
        });
    }
};

export default registrationFetch;
import {HEADER_HEIGHT, FOOTER_HEIGHT, REGISTRATION} from "./types";

export const headerHeight = (headerHeight) => {
  return {
      type: HEADER_HEIGHT,
      payload: headerHeight
  }
};

export const footerHeight = (footerHeight) => {
  return {
      type: FOOTER_HEIGHT,
      payload: footerHeight
  }
};

export const registration = (formValues) => async dispatch => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify( {
            username: formValues.registerUsername,
            email: formValues.registerEmail,
            password: formValues.registerPassword,
            confirmPassword: formValues.registerConfirmPassword
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    dispatch({
        type: REGISTRATION,
        payload: data
    })
};
// import * as actionTypes from "./../actionsTypes";
// import * as localStorage from "../../../localStorage";
//
// const logoutFetch = () => async dispatch => {
//     const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "access-token": `Bearer ${localStorage.accessTokenLocalStorage}`,
//             "refresh-token": localStorage.refreshTokenLocalStorage
//         }
//     });
//
//     const data = await response.json();
//
//     console.log(data)
//     dispatch({
//         type: actionTypes.LOGOUT_FETCH,
//         payload: data
//     });
// };
//
// export default logoutFetch;
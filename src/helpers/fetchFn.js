import {setItemInLocalStorage, getItemFromLocalStorage} from "./localStorage";

const fetchFn = async (url, method, body, content_type) => {
    const accessToken = getItemFromLocalStorage("accessToken");
    const refreshToken = getItemFromLocalStorage("refreshToken");

    let defaultHeaders = {
        "Content-Type": "application/json",
        "access-token": `Bearer ${accessToken}`,
        "refresh-token": refreshToken
    };

    if (content_type === "form-data") {
        defaultHeaders = {
            "access-token": `Bearer ${accessToken}`,
            "refresh-token": refreshToken
        }
    }

    try {
        const response = await fetch(url, {
            method: method,
            headers: defaultHeaders,
            body: body
        });

        const data = await response.json();

        if (data.tokens) {
            setItemInLocalStorage("accessToken", data.tokens.accessToken);
            setItemInLocalStorage("refreshToken", data.tokens.refreshToken);
        }

        if (response.status === 200 || response.status === 201) {
            return [data, null];
        } else {
            throw new Error(data);
        }

    } catch (error) {
        return [null, error];
    }
};

export default fetchFn;
import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import {getItemFromLocalStorage} from "../../../helpers/localStorage";

const Layout = (props) => {
    const isLoggedIn = getItemFromLocalStorage('loginState');

    return (
        <React.Fragment>
            <Header isLoggedIn={isLoggedIn}/>
            <Main mainChildren={props.children}/>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
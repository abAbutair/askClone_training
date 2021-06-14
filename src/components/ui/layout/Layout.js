import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Main mainChildren={props.children}/>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
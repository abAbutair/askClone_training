import React from "react";

import Registration from "./Registration";
import Login from "./Login";

import Layout from "../../ui/layout/Layout";

const Authentication = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Registration />
                    </div>
                    <div className="col-lg-6">
                        <Login />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Authentication;
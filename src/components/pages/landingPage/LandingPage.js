import React from "react";
import Layout from "../../ui/layout/Layout";
import CardBordered from "../../ui/cards/CardBordered";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <Layout>
            <div className="centered-block">
                <CardBordered alignment="center">
                    <h2>Ask</h2>
                    <p>Curious? Just ask! Openly or anonymously.</p>
                    <div className="full-width">
                        <Link to="/authentication" className="btn btn-primary">Login</Link>
                        <Link to="/authentication" className="btn btn-primary">Register</Link>
                    </div>
                </CardBordered>
            </div>
        </Layout>
    );
};

export default LandingPage;
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getNewsfeed} from "../../../store/actions";
import Layout from "../../ui/layout/Layout";
import QuestionBlock from "../../QuestionBlock";

const Newsfeed = (props) => {
    useEffect(() => {
        props.getNewsfeed();
    }, []);

    const renderNewsfeed = props.newsfeed.length === 0 ? "No Feed to Show" : props.newsfeed.map(oneNewsfeed => {
        return (
            <QuestionBlock questionBlock={oneNewsfeed} key={oneNewsfeed.question_id} currentProfileIdFromURL={props.currentProfileIdFromURL} myProfileIDFromLocalStorage={props.myProfileIDFromLocalStorage}/>
        );
    });

    return (
        <Layout>
            <div className="container">
                {renderNewsfeed}
            </div>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        newsfeed: Object.values(state.newsfeed)
    };
};

export default connect(mapStateToProps, {getNewsfeed})(Newsfeed);
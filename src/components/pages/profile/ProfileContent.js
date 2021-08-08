import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserAnswers, getYourAnswers} from "../../../store/actions";
import QuestionBlock from "../../QuestionBlock";

const ProfileContent = (props) => {
    useEffect(() => {
        if (props.currentProfileIdFromURL === props.myProfileIDFromLocalStorage) {
            props.getYourAnswers();
        } else {
            props.getUserAnswers(props.currentProfileIdFromURL);
        }
    }, []);

    const renderAnswers = props.currentProfileIdFromURL === props.myProfileIDFromLocalStorage ? props.yourAnswers : props.userAnswers;
    const renderContent = renderAnswers.length === 0 ? "No Answers to Show" : renderAnswers.map(oneAnswer => {
        return (
            <QuestionBlock questionBlock={oneAnswer} key={oneAnswer.question_id} currentProfileIdFromURL={props.currentProfileIdFromURL}/>
        );
    });

    return (
        <React.Fragment>
            {renderContent}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        yourAnswers: Object.values(state.yourAnswers),
        userAnswers: Object.values(state.userAnswers)
    }
};

export default connect(mapStateToProps, {getYourAnswers, getUserAnswers})(ProfileContent);
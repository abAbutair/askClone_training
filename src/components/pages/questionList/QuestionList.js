import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getQuestions, deleteQuestion} from "../../../store/actions";
import Layout from "../../ui/layout/Layout";
import CardBordered from "../../ui/cards/CardBordered";
import Button from "../../ui/formFields/Button";
import buttonStyles from "../../ui/formFields/button.module.scss";
import styles from "./questionList.module.scss";
import {Link} from "react-router-dom";

const QuestionList = (props) => {
    useEffect(() => {
        props.getQuestions();
    }, []);

    const onDeleteClick = (questionId) => {
        props.deleteQuestion(questionId);
    };

    const renderQuestions = props.questionsList.map(question => {
        return (
            <div className={styles['question-list__item']} key={question.question_id}>
                <CardBordered>
                    <h3>{question.question}</h3>
                    <div className="d-flex justify-content-between">
                        <Link to={`/questions/addanswer/${question.question_id}`} className={`btn ${buttonStyles.btn} ${buttonStyles['btn--default']}`}>answer</Link>
                        <Button type="button" onClick={() => onDeleteClick(question.question_id)}>delete</Button>
                    </div>
                </CardBordered>
            </div>
        );
    });

    return (
        <Layout>
            <div className="container">
                <div className="question-list">
                    {props.questionsList.length === 0 ? "No Questions to Show" : renderQuestions}
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        questionsList: Object.values(state.questions)
    };
};

export default connect(mapStateToProps, {getQuestions, deleteQuestion})(QuestionList);
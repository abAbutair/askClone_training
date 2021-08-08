import React, {useEffect, useState} from "react";
import Layout from "../../ui/layout/Layout";
import QuestionBlock from "../../QuestionBlock";
import fetchFn from "../../../helpers/fetchFn";

const Answer = (props) => {
    const [oneQuestion, setOneQuestion] = useState([]);

    const currentQuestionIdFromURL = props.match.params.questionid;

    useEffect(() => {
        const getOneQuestion = async () => {
            const [data, error] = await fetchFn(
                `${process.env.REACT_APP_BASE_URL}/questions/getoneanswer/${currentQuestionIdFromURL}`,
                'GET',
                null,
                'application/json'
            );

            console.log(data)
            console.log("getOneQuestion error", error);
            setOneQuestion(data.payload);
        };
        getOneQuestion();
    }, []);

    return (
        <Layout>
            <div className="container">
                {oneQuestion.length === 0 ? 'loading' : <QuestionBlock questionBlock={oneQuestion} currentProfileIdFromURL={null}/>}
            </div>
        </Layout>
    );
};

export default Answer;
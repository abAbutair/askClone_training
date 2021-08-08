import React, {useEffect, useState} from "react";
import {Form} from "react-final-form";
import {connect} from "react-redux";

import {getQuestion, addAnswer} from "../../../store/actions";

import Layout from "../../ui/layout/Layout";
import CardBordered from "../../ui/cards/CardBordered";
import Textarea from "../../ui/formFields/Textarea";
import Button from "../../ui/formFields/Button";

import fetchFn from "../../../helpers/fetchFn";
import avatar from "../../../assets/images/avatar.jpg";

const AddAnswer = (props) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        props.getQuestion(props.match.params.questionid);
    }, []);

    const onUploadImageChange = async e => {
        console.log(e);

        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        console.log(formData.get('image'));

        const [data, error] = await fetchFn(
            `${process.env.REACT_APP_BASE_URL}/upload/image`,
            'POST',
            formData,
            'form-data'
        );

        console.log(data)
        console.log(error)
        setUploadedImage(data.payload);

    }

    const onAnswerFormSubmit = (formValues) => {
        console.log(formValues);
        props.addAnswer(formValues, uploadedImage, props.match.params.questionid);
    };

    const renderAnswerForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Textarea name="questionAnswer" placeholder="Add your Answer"/>
                </div>
                <div className="mb-3">
                    {/*<Input type="file" name="uploadFile" className="form-control form-control-sm"/>*/}
                    <input name="uploadFile" type="file" className="form-control form-control-sm" onChange={onUploadImageChange}/>
                    <div className="img-holder">
                        <img src={uploadedImage ? `${process.env.REACT_APP_BASE_URL}/${uploadedImage}` : avatar} alt=""/>
                    </div>
                </div>
                <Button type="submit">submit</Button>
            </form>
        );
    };

    return (
        <Layout>
            <div className="container">
                <CardBordered width="50%" alignment="center">
                    <div className="d-flex justify-content-between">
                        {props.question ? <React.Fragment>
                            <h5 className="text-capitalize">{props.question.question}</h5>
                            <span>From: <strong>{props.question.is_anonymous ? "Anonymous" : "a user"}</strong></span>
                        </React.Fragment> : <div>loading</div>}
                    </div>
                    <Form onSubmit={onAnswerFormSubmit} render={renderAnswerForm}/>
                </CardBordered>
            </div>
        </Layout>

    );
};

const mapStateToProps = (state) => {
    return {
        question: state.oneQuestion
    }
};

export default connect(mapStateToProps, {getQuestion, addAnswer})(AddAnswer);
import React from "react";
import {connect} from "react-redux";
import {Form} from "react-final-form";

import {registration} from "../../../actions";

import Input from "../../ui/formFields/Input";
import Button from "../../ui/formFields/Button";

const Registration = (props) => {
    const onRegisterFormSubmit = async (formValues) => {
        props.registration(formValues);
    };

    const registerFormValidate = (e) => {
        const errors = {};

        if (e.username && e.username.length > 5) {
            errors[e.username] = 'Too short';
        }

        return errors;
    };

    const renderRegisterForm = ({handleSubmit}) => {
        return (
            <React.Fragment>
                <h2>Registration</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Input name="registerUsername" type="text" labelName="Username"/>
                    </div>
                    <div className="mb-3">
                        <Input name="registerEmail" type="email" labelName="Email"/>
                    </div>
                    <div className="mb-3">
                        <Input name="registerPassword" type="password" labelName="Password"/>
                    </div>
                    <div className="mb-3">
                        <Input name="registerConfirmPassword" type="password" labelName="Confirm Password"/>
                    </div>
                    <Button type="submit" buttonContent="Register"/>
                </form>
            </React.Fragment>
        );
    };

    return (
        <div className="register">
            <Form onSubmit={onRegisterFormSubmit} validate={registerFormValidate} render={renderRegisterForm}/>
        </div>
    );
};

export default connect(null, {registration})(Registration);
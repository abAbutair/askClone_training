import React from "react";
import {connect} from "react-redux";
import {Form} from "react-final-form";

import {registrationFetch} from "../../../store/actions";

import Input from "../../ui/formFields/Input";
import Button from "../../ui/formFields/Button";

const Registration = (props) => {
    const required = value => (value ? undefined : "Required");

    const onRegisterFormSubmit = (formValues) => {

        // registration fetch action
        props.registrationFetch(formValues);
    };

    const registerFormValidate = (e) => {
        const errors = {};

        if (e.username && e.username.length === 0 ) {
            errors[e.username] = 'required';
        }

        return errors;
    };

    const renderRegisterForm = ({handleSubmit}) => {
        return (
            <React.Fragment>
                <h2>Registration</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Input name="registerUsername" type="text" placeholder="Username" labelName="Username" validate={required}/>
                    </div>
                    <div className="mb-3">
                        <Input name="registerEmail" type="email" placeholder="Email" labelName="Email"/>
                    </div>
                    <div className="mb-3">
                        <Input name="registerPassword" type="password" placeholder="Password" labelName="Password"/>
                    </div>
                    <div className="mb-3">
                        <Input name="registerConfirmPassword" type="password" placeholder="Confirm Password" labelName="Confirm Password"/>
                    </div>
                    <Button type="submit">Register</Button>
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

export default connect(null, {registrationFetch})(Registration);
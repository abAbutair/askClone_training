import React from "react";
import {Form} from "react-final-form";
import {connect} from "react-redux";

import {loginFetch} from "../../../store/actions";

import Input from "../../ui/formFields/Input";
import Button from "../../ui/formFields/Button";


const Login = (props) => {

    const onLoginFormSubmit = (formValues) => {
        props.loginFetch(formValues);
    };

    const loginFormValidate = (e) => {
        const errors = {};

        if (e.password && e.password.length > 6) {
            errors.password = 'Too short';
        }

        return errors;
    };

    const renderLoginForm = ({handleSubmit}) => {
        return (
            <React.Fragment>
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Input name="loginEmail" type="email" placeholder="Email" labelName="Email"/>
                    </div>
                    <div className="mb-3">
                        <Input name="loginPassword" type="password" placeholder="Password" labelName="Password"/>
                    </div>
                    <Button type="submit" >Login</Button>
                </form>
            </React.Fragment>
        );
    };

    return (
        <div className="login">
            <Form onSubmit={onLoginFormSubmit} validate={loginFormValidate} render={renderLoginForm}/>
        </div>
    );
};

export default connect(null, {loginFetch})(Login);
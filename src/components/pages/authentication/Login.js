import React from "react";
import {Form} from "react-final-form";

import Input from "../../ui/formFields/Input";
import Button from "../../ui/formFields/Button";

const Login = () => {
    const onLoginFormSubmit = (formValues) => {
        console.log(formValues)
    };

    const loginFormValidate = (e) => {
        const errors = {};

        if (e.password && e.password.length > 5) {
            errors[e.password] = 'Too short';
        }

        return errors;
    };

    const renderLoginForm = ({handleSubmit}) => {
        return (
            <React.Fragment>
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Input name="loginEmail" type="email" labelName="Email"/>
                    </div>
                    <div className="mb-3">
                        <Input name="loginPassword" type="password" labelName="Password"/>
                    </div>
                    <Button type="submit" buttonContent="Login"/>
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

export default Login;
import React from "react";
import {Field} from "react-final-form";

const Input = ({name, type, labelName, placeholder, validate}) => {

    const renderError = ({touched, error}) => {
        if (touched && error) {
            return (
                <span>{error}</span>
            );
        }
    };

    const inputHandler = ({input, meta, id, labelName, placeholder}) => {
        if (labelName && placeholder) {
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelName}</label>
                    <input {...input} className="form-control" id={id} placeholder={placeholder}/>
                    <div>{renderError(meta)}</div>
                </React.Fragment>
            );
        } else if (labelName && !placeholder) {
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelName}</label>
                    <input {...input} className="form-control" id={id}/>
                    <div>{renderError(meta)}</div>
                </React.Fragment>
            );
        } else if (placeholder && !labelName) {
            return (
                <React.Fragment>
                    <input {...input} className="form-control" id={id} placeholder={placeholder}/>
                    <div>{renderError(meta)}</div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <input {...input} className="form-control" id={id}/>
                <div>{renderError(meta)}</div>
            </React.Fragment>
        );
    };

    return (
        <Field name={name} type={type} render={inputHandler} id={name} labelName={labelName} placeholder={placeholder} validate={validate}/>
    );

};

export default Input;
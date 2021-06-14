import React from "react";
import {Field} from "react-final-form";

const Input = ({name, type, labelName}) => {

    const renderError = ({touched, error}) => {
        if (touched && error) {
            return (
                <span>{error}</span>
            );
        }
    };

    const inputHandler = ({input, meta, id, labelName}) => {
        return (
            <React.Fragment>
                <label htmlFor={id} className="form-label">{labelName}</label>
                <input {...input} className="form-control" id={id} placeholder={labelName}/>
                <div>{renderError(meta)}</div>
            </React.Fragment>
        );
    };

    return (
        <Field name={name} type={type} render={inputHandler} id={name} labelName={labelName}/>
    );

};

export default Input;
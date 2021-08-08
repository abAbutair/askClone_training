import React from "react";
import {Field} from "react-final-form";

const Textarea = ({name, labelName, placeholder}) => {

    const renderError = ({touched, error}) => {
        if (touched && error) {
            return (
                <span>{error}</span>
            );
        }
    };

    const textareaHandler = ({input, meta, id, labelName, placeholder}) => {
        if (labelName && placeholder) {
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelName}</label>
                    <textarea {...input} className="form-control" id={id} placeholder={placeholder}/>
                    <div>{renderError(meta)}</div>
                </React.Fragment>
            );
        } else if (labelName && !placeholder) {
            return (
                <React.Fragment>
                    <label htmlFor={id} className="form-label">{labelName}</label>
                    <textarea {...input} className="form-control" id={id}/>
                    <div>{renderError(meta)}</div>
                </React.Fragment>
            );
        } else if (placeholder && !labelName) {
            return (
                <React.Fragment>
                    <textarea {...input} className="form-control" id={id} placeholder={placeholder}/>
                    <div>{renderError(meta)}</div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <textarea {...input} className="form-control" id={id}/>
                <div>{renderError(meta)}</div>
            </React.Fragment>
        );
    };

    return (
        <Field name={name} render={textareaHandler} id={name} labelName={labelName} placeholder={placeholder}/>
    );

};

export default Textarea;
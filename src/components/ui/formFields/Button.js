import React from "react";
import styles from './button.module.scss';

const Button = ({buttonContent, type}) => {
    return (
        <button className={`btn ${styles.btn} ${styles['btn--default']}`} type={type}>{buttonContent}</button>
    );
};

export default Button;
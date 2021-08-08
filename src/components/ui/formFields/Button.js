import React from "react";
import styles from './button.module.scss';

const Button = ({children, type, onClick}) => {
    return (
        <button className={`btn ${styles.btn} ${styles[`btn--default`]}`} type={type} onClick={onClick}>{children}</button>
    );
};

export default Button;
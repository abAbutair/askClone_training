import React from "react";
import styles from "./card.module.scss";

const CardBordered = (props) => {
    return (
        <div className={`${styles.card} ${styles['card--bordered']}`} style={{textAlign: props.alignment, width: props.width, margin: "0 auto"}}>
            {props.children}
        </div>
    );
};

export default CardBordered;
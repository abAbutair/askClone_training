import React from "react";
import styles from "./card.module.scss";

const CardBackground = (props) => {
    return (
        <div className={`${styles.card} ${styles['card--background']}`} style={{textAlign: props.alignment, width: props.width, marginLeft: "auto", marginRight: "auto"}}>
            {props.children}
        </div>
    );
};

export default CardBackground;
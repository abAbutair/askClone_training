import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {footerHeight} from "../../../store/actions";

import styles from "./footer.module.scss";

const Footer = (props) => {
    const footerRef = useRef();

    useEffect(() => {
        props.footerHeight(footerRef.current.clientHeight);
    }, []);

    return (
        <footer ref={footerRef} className={styles.footer}>
            <span className={styles.copyrights}>All rights received</span>
        </footer>
    );
};

export default connect(null, {footerHeight})(Footer);
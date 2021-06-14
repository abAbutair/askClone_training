import React from "react";
import {connect} from "react-redux";

import styles from "./main.module.scss";

const Main = (props) => {
    return (
        <main className={styles.main} style={{"height": `calc(100vh - (${props.headerHeight}px + ${props.footerHeight}px))`}}>
            {props.mainChildren}
        </main>
    );
};

const mapStateToProps = state => {
    return {
        headerHeight: state.headerHeight,
        footerHeight: state.footerHeight
    };
};

export default connect(mapStateToProps)(Main);
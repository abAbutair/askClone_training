import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {headerHeight} from "../../../actions";
import styles from "./header.module.scss";

const Header = (props) => {
    const headerLoggedIn = false;

    const headerRef = useRef();

    useEffect(() => {
        props.headerHeight(headerRef.current.clientHeight);
    }, []);


    const headerAfterLogin = (
        <div className={styles.header__after}>
            <div className={styles.logo}>
                <span>Ask Me</span>
            </div>
            <div className="navigate">
                <span>nav</span>
            </div>
        </div>
    );

    const headerBeforeLogin = (
        <div className={styles.header__before}>
            <div className={styles.logo}>
                <span>Ask Me</span>
            </div>
        </div>
    );

    return (
        <header ref={headerRef} className={styles.header}>
           <div className="container">
               {headerLoggedIn ? headerAfterLogin : headerBeforeLogin}
           </div>
        </header>
    );
};

export default connect(null, {headerHeight})(Header);
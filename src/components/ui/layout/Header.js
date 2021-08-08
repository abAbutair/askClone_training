import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {headerHeight} from "../../../store/actions";
import history from "../../../helpers/history";
import avatar from "../../../assets/images/avatar.jpg";
import styles from "./header.module.scss";
import ThemeMode from "./ThemeMode";

import {getItemFromLocalStorage} from "../../../helpers/localStorage";

import Dropdown from "../dropdown/Dropdown";

const Header = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const headerRef = useRef();

    const userId = getItemFromLocalStorage('userId');

    useEffect(() => {
        props.headerHeight(headerRef.current.clientHeight);
    }, []);

    const onLogoutClick = () => {
        localStorage.clear();
        history.push('/');
    }

    const headerAfterLogin = (
        <div className={styles.header__after}>
            <div className={styles.logo}>
                <Link to={isLoggedIn ? '/newsfeed' : "/"}>Ask Me</Link>
            </div>
            <ul className={styles.header__nav}>
                <li className={styles.header__nav__item}>
                    <ThemeMode/>
                </li>
                <li className={styles.header__nav__item}>
                    <Link to="/questions" className={styles.header__font}>
                        <i className="bi bi-question-octagon"/>
                    </Link>
                </li>
                <li className={styles.header__nav__item}>
                    <Link to="/notifications" className={styles.header__font}>
                        <i className="bi bi-bell"/>
                    </Link>
                </li>
                <li className={styles.header__nav__item}>
                    <Link to={`/${userId}`} className={styles.header__profile}>
                        <span>
                            <img src={avatar} alt="avatar"/>
                        </span>
                    </Link>
                </li>
                <li className={styles.header__nav__item}>
                    <Dropdown top="0.6rem">
                        <li>
                            <Link to="/followinglist">Following List</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li className="dropdown-divider">
                        </li>
                        <li>
                            <Link to="/" onClick={onLogoutClick}>Logout</Link>
                        </li>
                    </Dropdown>
                </li>
            </ul>
        </div>
    );

    const headerBeforeLogin = (
        <div className={styles.header__before}>
            <div className={styles.logo}>
                <Link to="/">Ask Me</Link>
            </div>
        </div>
    );

    return (
        <header ref={headerRef} className={styles.header}>
            <div className="container">
                {isLoggedIn ? headerAfterLogin : headerBeforeLogin}
            </div>
        </header>
    );
};

export default connect(null, {headerHeight})(Header);
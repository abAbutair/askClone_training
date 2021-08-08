import React, {useEffect, useState} from "react";
import classes from "./themeMode.module.scss";
import {getItemFromLocalStorage, setItemInLocalStorage} from "../../../helpers/localStorage";

const ThemeMode = () => {
    const body = document.body;
    const themeFromLocalStorage = getItemFromLocalStorage("theme");
    const [themeMode, setThemeMode] = useState('light');

    useEffect(() => {
        setThemeMode(themeFromLocalStorage ? themeFromLocalStorage : themeMode);
        setItemInLocalStorage("theme", themeFromLocalStorage ? themeFromLocalStorage : themeMode);
        if (themeFromLocalStorage === "light") {
            body.classList.remove('dark-mode');
        } else if (themeFromLocalStorage === "dark") {
            body.classList.add("dark-mode")
        }
    }, [themeFromLocalStorage]);

    const onThemeModeClick = () => {
        if (themeFromLocalStorage === "light") {
            setThemeMode("dark");
            setItemInLocalStorage("theme", "dark");
            body.classList.add('dark-mode');

        } else if (themeFromLocalStorage === "dark") {
            setThemeMode("light");
            setItemInLocalStorage("theme", "light");
            body.classList.remove('dark-mode');
        }
    };

    return (
        <button type="button" className={`${classes['theme-mode']} ${classes[`theme-mode-${themeMode}`]}`} onClick={onThemeModeClick}>
            {
                themeMode === "light" ?
                <i className="bi bi-moon-stars-fill"/>
                :
                <i className="bi bi-brightness-high-fill"/>
            }
        </button>
    );
};

export default ThemeMode;
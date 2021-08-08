import React, {useEffect, useRef, useState} from "react";
import styles from "./dropdown.module.scss";


const Dropdown = ({top, children}) => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
                return;
            }

            setShow(false);
        };

        document.body.addEventListener("click", onBodyClick, {capture: true});

        return () => {
          document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const onDropdownClick = () => {
        setShow(!show);
    };

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <div className="dropdown">
                    <button className={`btn ${styles[`dropdown__btn`]} dropdown-toggle ${show ? "show" : ''}`} type="button" onClick={onDropdownClick}/>
                <ul className={`dropdown-menu ${styles[`dropdown-menu`]} ${show ? "show" : "hide"}`} style={{top: `calc(100% + ${top})`}}>
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
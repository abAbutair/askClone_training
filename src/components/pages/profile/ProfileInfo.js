import React, {useEffect, useState} from "react";
import styles from "./profile.module.scss";
import avatar from "../../../assets/images/avatar.jpg";
import Button from "../../ui/formFields/Button";
import fetchFn from "../../../helpers/fetchFn";
import {connect} from "react-redux";
import {getMyProfileInfo} from "../../../store/actions";

const ProfileInfo = (props) => {
    const [userFollowed, setUserFollowed] = useState(false);

    useEffect(() => {
        if (props.currentProfileIdFromURL === props.myProfileIDFromLocalStorage) {
            props.getMyProfileInfo(props.myProfileIDFromLocalStorage);
        } else {
            const getUserInfo = async () => {
                const [data, error] = await fetchFn(
                    `${process.env.REACT_APP_BASE_URL}/user/getuserandimage/${props.currentProfileIdFromURL}`,
                    "GET",
                    null,
                    "application/json"
                );
                console.log(error);

                if (data) {
                    props.setUserName(data.payload[0].user_name ? data.payload[0].user_name : null);
                    props.setUserImage(data.payload[0].user_image ? data.payload[0].user_image : null);
                }
            };

            getUserInfo();
        }

    }, []);

    useEffect(() => {
        const checkIfUserBeenFollowed = async () => {
            const [data, error] = await fetchFn(
                `${process.env.REACT_APP_BASE_URL}/checkfollow/${props.currentProfileIdFromURL}`,
                "GET",
                null,
                "application/json"
            );
            console.log(error);

            if (data === "success") {
                setUserFollowed(true);
            }
        };
        checkIfUserBeenFollowed();
    }, []);

    const onFollowClick = async (userToFollowId) => {

        const [data, error] = await fetchFn(
            `${process.env.REACT_APP_BASE_URL}/follow/${userToFollowId}`,
            "POST",
            null,
            "application/json"
        );

        console.log(error)

        if (data === "followed") {
            setUserFollowed(true);
        }
    };

    const onUnfollowClick = async (userToUnfollowId) => {
        const [data, error] = await fetchFn(
            `${process.env.REACT_APP_BASE_URL}/unfollow/${userToUnfollowId}`,
            "DELETE",
            null,
            "application/json"
        );

        console.log(error);

        if (data === "unfollowed") {
            setUserFollowed(false);
        }
    };

    if (props.currentProfileIdFromURL === props.myProfileIDFromLocalStorage) {
        return (
            <React.Fragment>
                <div className={styles.profile__avatar}>
                    <img src={props.myProfileInfo.user_image === null ? avatar : props.myProfileInfo.user_image}
                         alt="user avatar"/>
                </div>
                <p className={styles.profile__name}>{props.myProfileInfo.user_name === '' ? "No Username to show" : props.myProfileInfo.user_name}</p>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <div className={styles.profile__avatar}>
                <img src={props.userImage === null ? avatar : `${process.env.REACT_APP_BASE_URL}/${props.userImage}`}
                     alt="user avatar"/>
            </div>
            <p className={styles.profile__name}>{props.userName === '' ? "No Username to show" : props.userName}</p>
            {userFollowed ?
                <Button type="button" onClick={() => onUnfollowClick(props.currentProfileIdFromURL)}>Unfollow</Button> :
                <Button type="button" onClick={() => onFollowClick(props.currentProfileIdFromURL)}>Follow</Button>}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        myProfileInfo: state.myProfileInfo,
    }
};

export default connect(mapStateToProps, {getMyProfileInfo})(ProfileInfo);
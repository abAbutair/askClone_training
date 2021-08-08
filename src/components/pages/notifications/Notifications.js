import React, {useEffect, useState} from "react";
import Layout from "../../ui/layout/Layout";
import fetchFn from "../../../helpers/fetchFn";
import CardBordered from "../../ui/cards/CardBordered";
import avatar from "../../../assets/images/avatar.jpg";

import classes from "./notification.module.scss";
import {Link} from "react-router-dom";
import LinearBlock from "../../LinearBlock";
const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const getNotifications = async () => {
            const [data, error] = await fetchFn(
                `${process.env.REACT_APP_BASE_URL}/users/notifications`,
                "GET",
                null,
                "appliction/json"
            );

            // console.log(data)
            console.log("getNotifications error", error);

            setNotifications(data.payload);
        }
        getNotifications();


    }, []);

    console.log(notifications);
    const renderNotifications = notifications.length === 0 ? "No Notifications to Show" : notifications.map(notification => {
        return (
            <LinearBlock data={notification}/>
        );
    });

    return (
        <Layout>
            <div className="container">
                {renderNotifications}
            </div>
        </Layout>
    );
};

export default Notifications;
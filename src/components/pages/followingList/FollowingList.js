import React, {useEffect, useState} from "react";
import fetchFn from "../../../helpers/fetchFn";
import Layout from "../../ui/layout/Layout";
import CardBordered from "../../ui/cards/CardBordered";
import classes from "../notifications/notification.module.scss";
import avatar from "../../../assets/images/avatar.jpg";
import {Link} from "react-router-dom";

const FollowingList = () => {
    const [followingList, setFollowingList] = useState([]);

    useEffect(() => {
        const getFollowingList = async () => {
            const [data, error] = await fetchFn(
                `${process.env.REACT_APP_BASE_URL}/getfollowing`,
                'GET',
                null,
                'application/json'
            );

            console.log(data);
            console.log(error);

            setFollowingList(data.payload);
        };
        getFollowingList();
    }, []);

    const renderFollowingList = followingList.map(following => {
        return (
            <CardBordered key={following.is_following}>
                <div className={classes.notification}>
                    <div className={classes.notification__img}>
                        <img src={following.user_image === null ? avatar : `${process.env.REACT_APP_BASE_URL}/${following.user_image}`} alt="user avatar"/>
                    </div>
                    <div className={classes.notification__dis}>
                        <span><Link to={`/${following.is_following}`}>{following.user_name}</Link></span>
                    </div>
                </div>
            </CardBordered>
        );
    });

    return (
        <Layout>
            <div className="container">
                {renderFollowingList}
            </div>
        </Layout>
    );
};

export default FollowingList;
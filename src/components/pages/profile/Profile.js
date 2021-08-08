import React, {useState} from "react";
import {Form, Field} from "react-final-form";

import Layout from "../../ui/layout/Layout";

import CardBordered from "../../ui/cards/CardBordered";
import Input from "../../ui/formFields/Input";
import Button from "../../ui/formFields/Button";

import styles from "./profile.module.scss";

import {connect} from "react-redux";
import {askYourself, askUser} from "../../../store/actions";

import {getItemFromLocalStorage} from "../../../helpers/localStorage";

import ProfileInfo from "./ProfileInfo";
import ProfileContent from "./ProfileContent";

const Profile = (props) => {
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState('');

    const myProfileIDFromLocalStorage = getItemFromLocalStorage("userId");
    const currentProfileIdFromURL = props.match.params.userId;


    // ---- handle ask form
    const onAskSubmit = (formValues) => {
        if (currentProfileIdFromURL === myProfileIDFromLocalStorage) {
            props.askYourself(formValues, false);
        } else {
            props.askUser(currentProfileIdFromURL, formValues);
        }
    };


    const renderAskForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Input name={currentProfileIdFromURL === myProfileIDFromLocalStorage ? "askYourself" : "askUser"} type="text" placeholder={`Ask ${currentProfileIdFromURL === myProfileIDFromLocalStorage ? "yourself" : userName} a question`}/>
                </div>
                <div className={styles["checkbox-field"]}>
                    {currentProfileIdFromURL === myProfileIDFromLocalStorage ? null :
                        <div className="form-check">
                            <Field name="checkAnonymous" type="checkbox" component="input" className="form-check-input"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Ask Anonymously
                            </label>
                        </div>
                    }
                    <Button type="submit">Ask</Button>
                </div>
            </form>
        );
    };

    return (
        <Layout>
            <div className="container">
                <div className={styles.profile}>
                    <div className={styles.profile__info}>
                        <ProfileInfo setUserName={setUserName} setUserImage={setUserImage} userName={userName} userImage={userImage} currentProfileIdFromURL={currentProfileIdFromURL} myProfileIDFromLocalStorage={myProfileIDFromLocalStorage}/>
                    </div>

                    <div className={styles.profile__ask}>
                        <CardBordered width="50%" alignment="center">
                            <Form onSubmit={onAskSubmit} render={renderAskForm}/>
                        </CardBordered>
                    </div>
                    <div className={styles.profile__content}>
                        <ProfileContent currentProfileIdFromURL={currentProfileIdFromURL} myProfileIDFromLocalStorage={myProfileIDFromLocalStorage}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default connect(null, {askYourself, askUser})(Profile);
import Layout from "../../ui/layout/Layout";
import React, {useEffect, useState} from "react";
import fetchFn from "../../../helpers/fetchFn";
import {Form} from "react-final-form";
import Input from "../../ui/formFields/Input";
import Button from "../../ui/formFields/Button";

const Settings = () => {
    const [userSettings, setUserSettings] = useState({});

    const initialValues = {
        settingUsername: userSettings.user_name,
    };

    useEffect(() => {
        const getUserSettings = async () => {
            const [data, error] = await fetchFn(
                `${process.env.REACT_APP_BASE_URL}/user/getsettings`,
                'GET',
                null,
                'application/json'
            );

            console.log(data)
            console.log(error)

            setUserSettings(data.payload);
        };

        getUserSettings();
    }, []);

    const settingFormValidate = (e) => {
        const errors = {};

        if (e.settingsUsername && e.settingsUsername.length > 5) {
            errors[e.settingsUsername] = 'Too short';
        }

        return errors;
    };

    const onSettingFormSubmit = (formValues) => {
        console.log(formValues);
    };

    const renderSettingForm = ({handleSubmit}) => {
        return (
            <React.Fragment>
                <h2>Registration</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Input name="settingsUsername" type="text" placeholder="Username" labelName="Username"
                               initialValue={userSettings.user_name}/>
                    </div>
                    <div className="mb-3">
                        <Input name="settingsEmail" type="email" placeholder="Email" labelName="Email"
                               initialValue={userSettings.user_email}/>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </React.Fragment>
        );
    };

    return (
        <Layout>
            <div className="container">
                <Form onSubmit={onSettingFormSubmit} initialValues={initialValues} validate={settingFormValidate} render={renderSettingForm}/>
            </div>
        </Layout>
    );
};

export default Settings;
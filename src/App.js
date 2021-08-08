import React, {useEffect} from "react";
import {Router, Route, Switch} from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import history from "./helpers/history";

import LandingPage from "./components/pages/landingPage/LandingPage";
import Newsfeed from "./components/pages/newsfeed/Newsfeed";
import Authentication from "./components/pages/authentication/Authentication";
import Profile from "./components/pages/profile/Profile";
import QuestionList from "./components/pages/questionList/QuestionList";
import AddAnswer from "./components/pages/addAnswer/AddAnswer";
import Notifications from "./components/pages/notifications/Notifications";
import Answer from "./components/pages/answer/Answer";
import FollowingList from "./components/pages/followingList/FollowingList";
import Settings from "./components/pages/settings/Settings";
import "./app.scss";

import socket from "./helpers/websockets";
import {Toaster} from "react-hot-toast";
import {getItemFromLocalStorage} from "./helpers/localStorage";

const App = () => {
    const userIdFromLocalStorage = getItemFromLocalStorage("userId");
    // const isLoggedIn = getItemFromLocalStorage("loginState");

    // if someone clear localstorage manually
    // window.addEventListener("storage", () => {
    //     localStorage.clear();
    //     history.push('/');
    // });

    useEffect(()=>{
        socket.emit('connected', userIdFromLocalStorage)
    }, [userIdFromLocalStorage]);

    return (
        <Router history={history}>
            <Toaster position="bottom-right" reverseOrder={false} />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/newsfeed" exact component={Newsfeed}/>
                <Route path="/authentication" exact component={Authentication}/>
                <Route path="/questions" exact component={QuestionList}/>
                <Route path="/notifications" exact component={Notifications}/>
                <Route path="/followinglist" exact component={FollowingList}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="/questions/addanswer/:questionid" exact component={AddAnswer}/>
                <Route path="/answers/:questionid" exact component={Answer}/>
                <Route path="/:userId" exact component={Profile}/>
            </Switch>
        </Router>
    );
};

export default App;
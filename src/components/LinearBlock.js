import {Link} from "react-router-dom";

import avatar from "../assets/images/avatar.jpg";
import CardBordered from "./ui/cards/CardBordered";
import classes from "./pages/notifications/notification.module.scss";

const LinearBlock = ({data}) => {
    return (
        <CardBordered key={data.notification_id}>
            <div className={classes.notification}>
                <div className={classes.notification__img}>
                    <img src={data.user_image === null ? avatar : `${process.env.REACT_APP_BASE_URL}/${data.user_image}`} alt="user avatar"/>
                </div>
                <div className={classes.notification__dis}>
                    <span>you have {data.notification_type === "Question" ? <Link to={`/questions/addanswer/${data.question_id}`}>a question</Link> : data.notification_type === "Answer" ? <Link to={`/answers/${data.question_id}`}>an answer</Link> : <Link to={`/answers/${data.question_id}`}>a like</Link>} from <Link to={`/${data.notification_sender}`}>{data.user_name}</Link></span>
                </div>
            </div>
        </CardBordered>
    );
};

export default LinearBlock;
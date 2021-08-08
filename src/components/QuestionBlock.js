import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import avatar from "../assets/images/avatar.jpg";
import CardBackground from "./ui/cards/CardBackground";
import {deleteAnswer} from "../store/actions";
import fetchFn from "../helpers/fetchFn";

import styles from "./pages/profile/profile.module.scss";
import btnStyle from "./ui/formFields/button.module.scss";
import {getItemFromLocalStorage} from "../helpers/localStorage";

const QuestionBlock = ({questionBlock, deleteAnswer, currentProfileIdFromURL}) => {
    const myProfileIDFromLocalStorage = getItemFromLocalStorage("userId");
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (questionBlock.liked_by === null) {
            return;
        }
        if (questionBlock.liked_by.includes(myProfileIDFromLocalStorage)) {
            setLiked(true);
        }
    }, []);

    const onDeleteIconClick = (questionId) => {
        deleteAnswer(questionId);
    };

    const onAddLikeClick = async (questionId) => {
        setLiked(true);

        const [data, error] = await fetchFn(
            `${process.env.REACT_APP_BASE_URL}/questions/addlike/${questionId}`,
            `PUT`,
            null,
            'application/json'
        );

        console.log(data)
        console.log('onAddLikeClick error', error)
    };

    const onRemoveLikeClick = async (questionId) => {
        setLiked(false);

        const [data, error] = await fetchFn(
            `${process.env.REACT_APP_BASE_URL}/questions/removelike/${questionId}`,
            `PUT`,
            null,
            'application/json'
        );


        console.log(data)
        console.log('onRemoveLikeClick error', error)
    };

    const date = new Date(questionBlock.asked_date);
    const getDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const getTime = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <CardBackground alignment="start" width="50%">
            <div className={styles['answered-block']}>
                <div className={styles.user}>
                    <div className={styles.user__info}>
                        <div className={styles.user__img}>
                            <img
                                src={questionBlock.is_anonymous ? avatar : questionBlock.user_image === null ? avatar : `${process.env.REACT_APP_BASE_URL}/${questionBlock.user_image}`}
                                alt="user avatar"/>
                        </div>
                        <div className={styles.user__dis}>
                            <strong
                                className={styles.user__name}>{questionBlock.is_anonymous ? 'Anonymous' : currentProfileIdFromURL === myProfileIDFromLocalStorage ? "You" : questionBlock.user_name}</strong>
                            <span>{getTime} {getDate}</span>
                        </div>
                    </div>
                    <i className="bi bi-trash" onClick={() => onDeleteIconClick(questionBlock.question_id)}/>
                </div>

                <div className={styles['answered-block__dis']}>
                    <div className={styles['answered-block__quest']}>
                        <h5><strong>Q: {questionBlock.question}</strong></h5>
                    </div>

                    <div className={styles['answered-block__answer']}>
                        <p><strong>A: </strong>{questionBlock.answer}</p>
                        <div className="img-holder">
                            <img
                                style={questionBlock.answer_image === null ? {display: "none"} : {display: "block"}}
                                src={`${process.env.REACT_APP_BASE_URL}/${questionBlock.answer_image}`}
                                alt="answer images"/>
                        </div>
                    </div>
                </div>
                <div className={styles['answered-block__reaction-counter']}>

                    <span>{questionBlock.liked_by === null ? '0' : questionBlock.liked_by.length} {questionBlock.liked_by === null ? "likes" : questionBlock.liked_by.length === 1 ? "Like" : "Likes"}</span>

                </div>
                <div className={styles['answered-block__reaction']}>
                    <button type='button'
                            className={`${btnStyle[`reaction-btn`]} ${liked ? btnStyle['reaction-btn--like'] : ''}`}
                            onClick={() => liked ? onRemoveLikeClick(questionBlock.question_id) : onAddLikeClick(questionBlock.question_id)}>
                        <i className={`bi ${liked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}`}/> {liked ? 'Liked' : 'Like'}
                    </button>
                </div>
            </div>
        </CardBackground>
    );
};

export default connect(null, {deleteAnswer})(QuestionBlock);
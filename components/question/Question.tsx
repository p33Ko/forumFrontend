import React from "react";
import styles from "./question.module.css";
import Router from "next/router";

type QuestionType = {
  title: string;
  question: string;
  date: string;
  id: string;
};

const Answers: React.FC<QuestionType> = ({ title, question, date, id }) => {
  const onClickHandler = () => {
    Router.push({
      pathname: `/question/${id}`,
    });
  };

  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.info}>{title}</h2>
        <h5 className={styles.info}>{question}</h5>
        <h6 className={styles.info}>{date}</h6>
      </div>
    </div>
  );
};

export default Answers;

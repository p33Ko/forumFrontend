import React from "react";
import styles from "./answer.module.css";

export type AnswerType = {
  answer: {
    _id: string;
    answer: string;
  };
};

const Answer: React.FC<AnswerType> = ({ answer }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.info}>{answer.answer}</h2>
      </div>
    </div>
  );
};

export default Answer;

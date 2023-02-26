import React, { useState } from "react";
import Router from "next/router";
import styles from "./answer.module.css";
import Input from "../input/input";
import Button from "../button/Button";
import axios from "axios";

const AnswerForm: React.FC = () => {
  const [answer, setAnswer] = useState();

  const onClickHandler = () => {
    const answerData = {
      answer: answer,
    };

    axios.post(`http://localhost:3002/question/${id}/answers`, answerData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={setAnswer} value={answer} placeholder="Answer" />

      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Post Answer" />
      </div>
    </div>
  );
};

export default AnswerForm;

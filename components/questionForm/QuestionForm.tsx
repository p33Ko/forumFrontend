import React, { useState } from "react";
import Router from "next/router";
import styles from "./questionForm.module.css";
import Input from "../input/input";
import Button from "../button/Button";
import axios from "axios";

const QuestionForm: React.FC = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [question, setQuestion] = useState();

  const onClickHandler = () => {
    console.log(title, date, question);

    const questionData = {
      date: date,
      title: title,
      question: question,
    };

    axios.post("http://localhost:3002/question", questionData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={setTitle} value={title} placeholder="Title" />
      <Input onChange={setQuestion} value={question} placeholder="Question" />

      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Ask Question" />
      </div>
    </div>
  );
};

export default QuestionForm;

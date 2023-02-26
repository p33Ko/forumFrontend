import React, { useState } from "react";
import Router from "next/router";
import styles from "./register.module.css";
import Input from "../input/input";
import Button from "../button/Button";
import axios from "axios";

const Register: React.FC = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    console.log(name, email, password);

    const questionData = {
      name: name,
      email: email,
      password: password,
    };

    axios.post("http://localhost:3002/register", questionData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={setName} value={name} placeholder="Write your name" />
      <Input onChange={setEmail} value={email} placeholder="Write your email" />
      <Input
        onChange={setPassword}
        value={password}
        placeholder="Insert your password"
      />

      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Register" />
      </div>
    </div>
  );
};

export default Register;

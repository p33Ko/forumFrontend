import React, { useState } from "react";
import Router from "next/router";
import styles from "./login.module.css";
import Input from "../input/input";
import Button from "../button/Button";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    console.log(email, password);

    const loginData = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:3002/login", loginData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={setEmail} value={email} placeholder="Write your email" />
      <Input
        onChange={setPassword}
        value={password}
        placeholder="Insert your password"
      />

      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Login" />
      </div>
    </div>
  );
};

export default Login;

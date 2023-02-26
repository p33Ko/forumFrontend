import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Router from "next/router";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import Question from "../../components/question/Question";

export default function Home(props: any) {
  const [filter, setFilter] = useState<any>("");
  console.log("axaxaxaxaxaxaxaxa", props);

  const onChangeFilterInputHander = (eventValue: any) => {
    setFilter(eventValue);
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.buttonWrapper}>
        <Button
          onClick={() => Router.push("/question")}
          text="Post A Question"
        />
      </div>
      <div className={styles.questionWrapper}>
        {props.data.question.map((data: any) => {
          return (
            <Question
              id={data._id}
              title={data.title}
              question={data.question}
              date={data.dateCreated}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(contex: any) {
  const response = await axios.get("http://localhost:3002/questions");
  return {
    props: {
      data: response.data,
    },
  };
}

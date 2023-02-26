import Navbar from "../../../components/navbar/Navbar";
import styles from "./answer.module.css";
import axios from "axios";
import Answer from "../../../components/answers/Answer";
import { AnswerType } from "../../../components/answers/Answer";
import AnswerForm from "../../../components/answerForm/AnswerForm";

type Props = {
  question: any;
  answers: AnswerType[];
};

export default function QuestionPage(props: Props) {
  const { question, answers } = props;
  console.log(answers);
  return (
    <div>
      <Navbar />

      {question && (
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.details}>
              <h1>{question.title}</h1>
              <h4> {question.question}</h4>
              <h6> {question.dateCreated}</h6>
            </div>
          </div>
        </div>
      )}

      <AnswerForm />

      {answers.map((answer: any) => (
        <Answer key={answer._id} answer={answer} />
      ))}
    </div>
  );
}

export async function getServerSideProps(contex: any) {
  const questionResponse = await axios.get(
    `http://localhost:3002/question/${contex.params.id}`
  );
  const answersResponse = await axios.get(
    `http://localhost:3002/question/${contex.params.id}/answers`
  );
  return {
    props: {
      question: questionResponse.data.question,
      answers: answersResponse.data.answers,
    },
  };
}

import { useStore } from "./store";

export default function StatsPage() {
  const {playerName, playerScore, incorrectAnswers, correctAnswers} = useStore(state => state)
  return <div>
    <p>Name: {playerName}</p>
    <p>Score: {playerScore}</p>
    <p>Correct answers: {correctAnswers.length}</p>
    <p>Incorrect answers: {incorrectAnswers.length}</p>
  </div>;
}

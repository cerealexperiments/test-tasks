import Category from "./Category";
import useCategories from "./hooks/useCategories";
import { useStore } from "./store";
import { useState } from "react";

export default function Game() {
  const {
    gameStarted,
    endGame,
    startGame,
    changePlayerScore,
    playerScore,
    activeQuestion,
    setActiveQuestion,
    disableQuestion,
    addAnswer,
  } = useStore((state) => state);
  const [answer, setAnswer] = useState("");
  const categoriesQuery = useCategories();
  const categories =
    categoriesQuery.data &&
    categoriesQuery.data.filter((item) => item.clues_count >= 5).slice(0, 5);
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(false);
  const handleSubmit = () => {
    setAnswered(true);
    addAnswer(answer, activeQuestion!);
    disableQuestion(activeQuestion!.id);
    setAnswer("");
    if (activeQuestion?.answer.toLowerCase() === answer.toLowerCase()) {
      setMessage("correct!");
      changePlayerScore(activeQuestion!.value);
    } else {
      setMessage("incorrect!");
      changePlayerScore(-activeQuestion!.value);
    }
    setTimeout(() => {
      setActiveQuestion(null);
      setMessage("");
      setAnswered(false);
    }, 2000);
  };
  if (!gameStarted) {
    return (
      <button
        className="border border-gray-700 py-1 px-2  self-center"
        onClick={startGame}
      >
        Start game
      </button>
    );
  }
  if (activeQuestion)
    return (
      <div className="mt-6">
        <div>
          <p>{activeQuestion.question}</p>
          <input
            placeholder="Answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="border px-2 border-gray-700 block mt-4"
            type="text"
          />
          {message && (
            <p className="mt-4">
              {message} Your score now is {playerScore}
            </p>
          )}
          <button
            onClick={!answered ? handleSubmit : () => {}}
            className="py-1 px-2 border mt-4 border-black"
          >
            Submit
          </button>
          <button
            onClick={() => setActiveQuestion(null)}
            className="border px-2 border-gray-700 block mt-4"
          >
            Home
          </button>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border gap-2 justify-center flex-1">
        {categories &&
          categories.map((item, index) => (
            <Category
              key={item.id}
              id={item.id}
              title={item.title}
              index={index}
            />
          ))}
      </div>
      <button
        onClick={endGame}
        className="py-1 px-2 self-end border border-red-700 text-red-700 mt-6"
      >
        End game
      </button>
    </div>
  );
}

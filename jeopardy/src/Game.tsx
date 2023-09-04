import Category from "./Category";
import useCategories from "./hooks/useCategories";
import { useStore } from "../src/store";
import { useState } from "react";

export default function Game() {
	const {
		questionActivated,
		changePlayerScore,
		setQuestionActivated,
		playerScore,
		activeQuestion,
		disableQuestion
	} = useStore((state) => state);
	const [answer, setAnswer] = useState("");
	const categoriesQuery = useCategories();
	const categories =
		categoriesQuery.data &&
		categoriesQuery.data.filter((item) => item.clues_count >= 5).slice(0, 5);
	const [message, setMessage] = useState("");
	const [answered, setAnswered] = useState(false)
	const handleSubmit = () => {
		setAnswered(true)
		if (activeQuestion?.answer === answer) {
			setTimeout(() => {
				setQuestionActivated(false);
				setMessage("")
				setAnswer("")
			}, 2000);
			setMessage("correct!");
			disableQuestion(activeQuestion.id)
			changePlayerScore(activeQuestion.value);
			return;
		}
		setTimeout(() => {
			setQuestionActivated(false);
			setMessage("")
			setAnswer("")
		}, 2000);
		setMessage("incorrect!");
		disableQuestion(activeQuestion!.id)
		changePlayerScore(-activeQuestion!.value);
		return;
	};
	if (questionActivated && activeQuestion)
		return (
			<div className="mt-6">
				<div>
					<p>{activeQuestion.question}</p>
					<p>{activeQuestion.answer}</p>
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
						onClick={() => setQuestionActivated(false)}
						className="border px-2 border-gray-700 block mt-4"
					>
						Home
					</button>
				</div>
			</div>
		);
	return (
		<div className="flex flex-col border gap-2 justify-center flex-1">
			{categories &&
				categories.map((item) => <Category id={item.id} title={item.title} />)}
		</div>
	);
}

import useCluesByCategory from "./hooks/useCluesByCategory";
import { useStore } from "./store";

type CategoryProps = {
	id: number;
	title: string;
};

export default function Category({ id, title }: CategoryProps) {
	const { setQuestionActivated, disabledQuestions, setActiveQuestion } = useStore(
		(state) => state,
	);
	const cluesQuery = useCluesByCategory(id);
	return (
		<div className="border flex items-center">
			<p className="mr-4 w-1/5 text-xl uppercase text-center">{title}</p>
			<div className="flex border w-full ">
				{cluesQuery.data &&
					cluesQuery.data
						.splice(0, 5)
						.sort((a, b) => a.value - b.value)
						.map((item) => (
							<div
								onClick={() => {
									setQuestionActivated(true);
									setActiveQuestion(item);
								}}
								className="border-x py-2 flex-1 text-xl text-center"
							>
								{disabledQuestions.includes(item.id) ? "x" : item.value}
							</div>
						))}
			</div>
		</div>
	);
}

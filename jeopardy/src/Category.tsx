import useQuestionsByCategory from "./hooks/useQuestionsByCategory";
import Question from "./Question";
import { useEffect } from "react";

type CategoryProps = {
  id: number;
  title: string;
  index: number;
};

export default function Category({ id, title, index }: CategoryProps) {
  const cluesQuery = useQuestionsByCategory(id);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!cluesQuery.isSuccess) {
        cluesQuery.refetch();
      }
    }, 1000 * index);
    return () => clearTimeout(timer);
  }, [cluesQuery.isSuccess]);
  const questions =
    cluesQuery.data &&
    cluesQuery.data
      .filter((item) => item.value)
      .splice(0, 5)
      .sort((a, b) => a.value - b.value);
  return (
    <div className="border flex items-center">
      <p className="mr-4 w-1/5 text-xl uppercase text-center">{title}</p>
      <div className="flex border w-full ">
        {questions ? (
          questions.map((item) => <Question key={item.id} question={item} />)
        ) : (
          <p>loading questions</p>
        )}
      </div>
    </div>
  );
}

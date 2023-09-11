import { QuestionType } from "./types";
import { useStore } from "./store";

type QuestionProps = {
  question: QuestionType;
};

export default function Question({ question }: QuestionProps) {
  const { setActiveQuestion, disabledQuestions } = useStore((state) => state);
  return (
    <div
      onClick={
        !disabledQuestions.includes(question.id)
          ? () => {
              setActiveQuestion(question);
            }
          : null
      }
      className="border-x py-2 flex-1 text-xl text-center"
    >
      {disabledQuestions.includes(question.id) ? "x" : question.value}
    </div>
  );
}

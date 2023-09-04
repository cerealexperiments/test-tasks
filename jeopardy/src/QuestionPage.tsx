type QuestionPageProps = {
  title: string;
  value: number;
  answer: string;
};
export default function QuestionPage({
  title,
  value,
  answer,
}: QuestionPageProps) {
  return (
    <div>
      <p className="mb-4">{title}</p>
      <p className="mb-4">value: {value}</p>
    </div>
  );
}

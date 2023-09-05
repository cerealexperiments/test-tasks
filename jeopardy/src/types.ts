export type CategoryType = {
  id: number;
  title: string;
  clues_count: number;
};

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  value: number;
  category: CategoryType;
};

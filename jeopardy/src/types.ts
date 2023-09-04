export type CategoryType = {
  id: number;
  title: string;
  clues_count: string;
};

export type ClueType = {
  id: number;
  question: string;
  answer: string;
  value: number;
  category: CategoryType;
};

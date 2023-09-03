export type Category = {
  id: number;
  title: string;
  clues_count: string;
};

export type Clue = {
  id: number;
  question: string;
  answer: string;
  value: number;
  category: Category;
};

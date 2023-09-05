import { create } from "zustand";
import { QuestionType } from "./types";

type JeopardyState = {
  playerName: string;
  setPlayerName: (name: string) => void;
  correctAnswers: QuestionType[],
  incorrectAnswers: QuestionType[],
  addAnswer: (answer: string, question: QuestionType) => void,
  questionActivated: boolean;
  activeQuestion: QuestionType | null;
  setQuestionActivated: (questionState: boolean) => void;
  setActiveQuestion: (question: QuestionType) => void;
  playerScore: number;
  changePlayerScore: (value: number) => void;
  disabledQuestions: number[];
  disableQuestion: (questionId: number) => void;
};

export const useStore = create<JeopardyState>((set) => ({
  playerName: "",
  correctAnswers: [],
  incorrectAnswers: [],
  addAnswer: (answer, question) => set((state) => {
    if(answer === question.answer) {
      return {
        correctAnswers: [...state.correctAnswers, question]
      }
    }
    return {
      incorrectAnswers: [...state.incorrectAnswers, question]
    }
  }),
  setPlayerName: (name) => set(() => ({ playerName: name })),
  questionActivated: false,
  activeQuestion: null,
  setQuestionActivated: (questionState) =>
    set(() => ({ questionActivated: questionState })),
  setActiveQuestion: (question) => set(() => ({ activeQuestion: question })),
  playerScore: 0,
  changePlayerScore: (value) =>
    set((state) => ({ playerScore: state.playerScore + value })),
  disabledQuestions: [],
  disableQuestion: (questionId: number) =>
    set((state) => ({
      disabledQuestions: [...state.disabledQuestions, questionId],
    })),
}));

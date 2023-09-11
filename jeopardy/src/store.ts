import { create } from "zustand";
import { QuestionType } from "./types";

type JeopardyState = {
  playerName: string;
  setPlayerName: (name: string) => void;
  gameStarted: boolean;
  startGame: () => void;
  endGame: () => void;
  correctAnswers: QuestionType[];
  incorrectAnswers: QuestionType[];
  addAnswer: (answer: string, question: QuestionType) => void;
  activeQuestion: QuestionType | null;
  setActiveQuestion: (question: QuestionType | null) => void;
  playerScore: number;
  changePlayerScore: (value: number) => void;
  disabledQuestions: number[];
  disableQuestion: (questionId: number) => void;
};

export const useStore = create<JeopardyState>((set) => ({
  playerName: "",
  gameStarted: false,
  startGame: () => set(() => ({ gameStarted: true })),
  endGame: () => set(() => ({ gameStarted: false })),
  correctAnswers: [],
  incorrectAnswers: [],
  addAnswer: (answer, question) =>
    set((state) => {
      if (answer === question.answer) {
        return {
          correctAnswers: [...state.correctAnswers, question],
        };
      }
      return {
        incorrectAnswers: [...state.incorrectAnswers, question],
      };
    }),
  setPlayerName: (name) => set(() => ({ playerName: name })),
  activeQuestion: null,
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

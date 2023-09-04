import { create } from "zustand";
import { ClueType } from "./types";

type JeopardyState = {
	questionActivated: boolean;
	activeQuestion: ClueType | null;
	setQuestionActivated: (questionState: boolean) => void;
	setActiveQuestion: (question: ClueType) => void;
	playerScore: number;
	changePlayerScore: (value: number) => void;
	disabledQuestions: number[];
	disableQuestion: (questionId: number) => void;
};

export const useStore = create<JeopardyState>((set) => ({
	questionActivated: false,
	activeQuestion: null,
	setQuestionActivated: (questionState) =>
		set(() => ({ questionActivated: questionState })),
	setActiveQuestion: (question) => set(() => ({ activeQuestion: question })),
	playerScore: 0,
	changePlayerScore: (value) =>
		set((state) => ({ playerScore: state.playerScore + value })),
	disabledQuestions: [],
	disableQuestion: (questionId: number) => set((state) => ({ disabledQuestions: [...state.disabledQuestions, questionId] }))
}));

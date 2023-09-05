import axios from "axios"
import {QuestionType} from "../types";
import {useQuery} from "@tanstack/react-query";

async function fetchQuestionsByCategory(categoryId: number) {
  const response =  await axios
    .get(`https://jservice.io/api/clues?category=${categoryId}`, {
    });
  const data: QuestionType[] = response.data
  return data
}

export default function useQuestionsByCategory(
  categoryId: number,
) {
  return useQuery({
    queryKey: [categoryId],
    queryFn: () => fetchQuestionsByCategory(categoryId),
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false
  });
}

import ky from "ky";
import { CategoryType } from "../types";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories() {
  const json: CategoryType[] = await ky
    .get("https://jservice.io/api/categories?count=50")
    .json();
  return json;
}

export default function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

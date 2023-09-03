import ky from "ky";
import { Category } from "../types";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories() {
  const json: Category[] = await ky
    .get("https://jservice.io/api/categories?count=50")
    .json();
  return json;
}

export default function useCategories() {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  return categoriesQuery;
}

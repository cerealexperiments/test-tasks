import axios from "axios";
import { CategoryType } from "../types";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories() {
  const response = await axios.get(
    "https://jservice.io/api/categories?count=50"
  );
  const data: CategoryType[] = response.data;
  return data;
}

export default function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

import ky from "ky";
import { ClueType } from "../types";
import { useQuery } from "@tanstack/react-query";

async function fetchCluesByCategory(categoryId: number) {
	const json: ClueType[] = await ky
		.get(`https://jservice.io/api/clues?category=${categoryId}`)
		.json();
	return json;
}

export default function useCluesByCategory(categoryId: number, enabledDeps = []) {
	const enable = categoryId && enabledDeps.find(item => item == true) ? true : false
	const cluesQuery = useQuery({
		queryKey: [categoryId],
		queryFn: () => fetchCluesByCategory(categoryId),
		enabled: !!categoryId,
	});
	return cluesQuery;
}

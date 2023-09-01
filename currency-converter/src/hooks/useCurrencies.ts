import { useQuery } from "@tanstack/react-query";

export type Currency = {
  CharCode: string;
  ID: string;
  Name: string;
  Previous: number;
  Value: number;
};

async function fetchCurrencies() {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const json = await response.json();
  const currencies: Currency[] = Object.values(json.Valute);
  return currencies;
}
export default function useCurrencies() {
  const currenciesQuery = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });
  return currenciesQuery;
}

import CurrencyItem from "./CurrencyItem";
import useCurrencies from "./hooks/useCurrencies";
import { useState } from "react";

export default function CurrenciesList() {
  const [searchValue, setSearchValue] = useState("");
  const currenciesQuery = useCurrencies();
  console.log(currenciesQuery.data);
  const currencies = currenciesQuery.data
    ? [...currenciesQuery.data].filter(
        (item) =>
          item.CharCode.includes(searchValue.toUpperCase()) ||
          item.Name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : null;
  return (
    <div className="mt-4">
      <h1 className="mb-4 font-medium text-lg">Currencies List</h1>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className="mb-4 border text-gray-600 px-2 border-gray-600 placeholder:text-gray-600"
        type="text"
        placeholder="Search currencies"
      />
      {currencies && (
        <div className="flex flex-col gap-2">
          {currencies.map((item) => (
            <CurrencyItem
              code={item.CharCode}
              value={item.Value}
              previous={item.Previous}
            />
          ))}
        </div>
      )}
    </div>
  );
}

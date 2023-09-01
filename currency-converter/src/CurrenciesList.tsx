import CurrencyItem from "./CurrencyItem";
import useCurrencies from "./hooks/useCurrencies";

export default function CurrenciesList() {
  const currenciesQuery = useCurrencies();
  console.log(currenciesQuery.data);
  return (
    <div className="mt-4">
      <h1 className="mb-4 font-medium text-lg">Currencies List</h1>
      {currenciesQuery.data && (
        <div className="flex flex-col gap-2">
          {currenciesQuery.data.map((item) => (
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

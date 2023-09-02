import { useEffect, useState } from "react";
import useCurrencies from "./hooks/useCurrencies";

export default function Converter() {
  const currencyQuery = useCurrencies();
  const currencies = currencyQuery.data && [
    ...currencyQuery.data,
    { CharCode: "RUB", Value: 1, Previous: 1, Name: "Ruble", ID: 40000 },
  ];
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [secondaryCurrency, setSecondaryCurrency] = useState<string | null>(
    "RUB",
  );
  const foundCurrency =
    currencies &&
    currencies.find((item) => item.CharCode === selectedCurrency);
  const foundSecondaryCurrency =
    currencies &&
    currencies.find((item) => item.CharCode === secondaryCurrency);

  useEffect(() => {
		console.log("useEffect triggered")
    if (currencyQuery.isSuccess) {
      setSelectedCurrency(currencies![0].CharCode);
    }
  }, [currencyQuery.isSuccess]);
  const calculatedCurrency = foundCurrency && foundSecondaryCurrency ? amount * foundCurrency.Value  / foundSecondaryCurrency.Value : 0;
  console.log(`calculated currency: ${calculatedCurrency}`)
  return (
    <div className="mt-4">
      <h1 className="mb-4 font-medium text-lg">Currency converter</h1>
      {currencies && (
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <input
              className="border py-1 max-w-[75px]"
              type="number"
              placeholder="amount"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
            <select
              onChange={(event) => setSelectedCurrency(event.target.value)}
              name="currency"
              id=""
            >
              {currencies.map((item) => (
                <option key={item.ID} value={item.CharCode}>{item.CharCode}</option>
              ))}
            </select>
          </div>
          <span> = </span>
          {foundCurrency && (
            <div className="flex gap-2 items-center">
              {calculatedCurrency}
              <select
                className="py-2"
                onChange={(event) => setSecondaryCurrency(event.target.value)}
                name="currency"
                id=""
              >
                {currencies.map((item, index) => (
                  <option selected={item.CharCode === "RUB"} key={item.ID} value={item.CharCode}>{item.CharCode}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

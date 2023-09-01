import { useEffect, useState } from "react";
import useCurrencies from "./hooks/useCurrencies";

export default function Converter() {
  const currencyQuery = useCurrencies();
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const foundCurrency =
    currencyQuery.data &&
    currencyQuery.data.find((item) => item.CharCode === selectedCurrency);
  useEffect(() => {
    if (currencyQuery.data) {
      setSelectedCurrency(currencyQuery.data[0].CharCode);
    }
  }, [currencyQuery.data]);
  return (
    <div>
      {currencyQuery.data && (
        <div>
          <input
            className="border"
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
            {currencyQuery.data.map((item) => (
              <option value={item.CharCode}>{item.CharCode}</option>
            ))}
          </select>
					{foundCurrency &&<p>{amount * foundCurrency.Value}</p>}
        </div>
      )}
    </div>
  );
}

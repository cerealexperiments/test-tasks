import { useState } from "react";
import classNames from "classnames";

type CurrencyItemProps = {
  code: string;
  value: number;
  previous: number;
};

export default function CurrencyItem({
  code,
  value,
  previous,
}: CurrencyItemProps) {
  const isPositiveChange = value - previous >= 0;
  const [mainCurrency, setMainCurrency] = useState<
    CurrencyItemProps | { code: string; value: number }
  >({ code: code, value: value, previous: previous });
  const [secondaryCurrency, setSecondaryCurrency] = useState({
    code: "RUB",
    value: 1,
  });

  return (
    <div className="flex gap-2">
      1 {mainCurrency.code} ={" "}
      {(mainCurrency.value / secondaryCurrency.value).toFixed(3)}{" "}
      {secondaryCurrency.code}{" "}
      <span
        className={classNames(
          { "text-green-500": isPositiveChange },
          { "text-red-500": !isPositiveChange },
        )}
      >
        {" "}
        (
        {value - previous > 0
          ? `+${(value - previous).toFixed(3)}`
          : `-${(value - previous).toFixed(3)}`}
        )
      </span>
      <button
        onClick={() => {
          setMainCurrency(secondaryCurrency);
          setSecondaryCurrency(mainCurrency);
        }}
        className="text-sm text-gray-700 border-gray-500 border p-0.5 px-1"
      >
        switch
      </button>
    </div>
  );
}

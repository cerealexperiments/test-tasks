import { create } from "zustand";

type CurrencyConverterState = {
  activeCurrency: Currency;
  setActiveCurrency: (currency: Currency) => void;
};

type Currency = {
  name: string;
  code: string;
  value: number;
  previousValue: number;
};

const useStore = create<CurrencyConverterState>((set) => ({
  activeCurrency: {
    code: "RUB",
    name: "Ruble",
    value: 1,
    previousValue: 1,
  },
  setActiveCurrency: (currency) => set(() => ({ activeCurrency: currency })),
}));

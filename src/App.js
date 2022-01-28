import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=a16fbb7a7037ce68996401d86f90b197";

export default function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);
  return (
    <div>
      <h1>Currency Converter</h1>
      <div className="flex">
        <CurrencyRow
          title={"From"}
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
        />
        <div className="equals">=</div>
        <CurrencyRow
          title={"To"}
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
        />
      </div>
    </div>
  );
}

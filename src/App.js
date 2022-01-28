import React, { useEffect } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=a16fbb7a7037ce68996401d86f90b197";

export default function App() {
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Currency Converter</h1>
      <div className="flex">
        <CurrencyRow title={"From"} />
        <div className="equals">=</div>
        <CurrencyRow title={"To"} />
      </div>
    </div>
  );
}

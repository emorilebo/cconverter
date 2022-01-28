import React from "react";

export default function CurrencyRow({ title, currencyOptions, selectedCurrency }) {
  return (
    <div>
      <h2>{title}</h2>
      <input type="number" className="input" />
      <select value={selectedCurrency} name="" id="">
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

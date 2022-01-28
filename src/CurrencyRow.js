import React from "react";

export default function CurrencyRow({ title, currencyOptions, selectedCurrency, onChangeCurrency, amount }) {
  return (
    <div>
      <h2>{title}</h2>
      <input type="number" className="input" value={amount} />
      <select value={selectedCurrency} name="" id="" onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

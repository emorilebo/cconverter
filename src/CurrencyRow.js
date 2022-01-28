import React from "react";

export default function CurrencyRow({ title, currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) {
  return (
    <div>
      <h2>{title}</h2>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
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

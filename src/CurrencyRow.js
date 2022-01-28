import React from "react";

export default function CurrencyRow({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <input type="number" className="input" />
      <select name="" id="">
        <option value="Hi">Hi</option>
      </select>
    </div>
  );
}

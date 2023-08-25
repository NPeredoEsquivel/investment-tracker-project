import React from "react";

const TABLE_HEADERS = [
  { name: "Year" },
  { name: "Total Savings" },
  { name: "Interest (Year)" },
  { name: "Total Interest" },
  { name: "Invested Capital" },
];
export default function InvestmentTable() {
  const headers = TABLE_HEADERS.map((singleHeader) => {
    return <th>{singleHeader.name}</th>;
  });
  return (
    <table className="result">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
}

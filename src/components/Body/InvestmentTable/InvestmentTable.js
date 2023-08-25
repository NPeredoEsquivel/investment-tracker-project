import React from "react";
import classes from "./InvestmentTable.module.scss";
import { formatter } from "../../../utils/utils.js";

const TABLE_HEADERS = [
  { name: "Year" },
  { name: "Total Savings" },
  { name: "Interest (Year)" },
  { name: "Total Interest" },
  { name: "Invested Capital" },
];
export default function InvestmentTable({
  investmentsCalculation,
  initialInvestment,
}) {
  const headers = TABLE_HEADERS.map((singleHeader) => {
    return <th>{singleHeader.name}</th>;
  });
  console.log(investmentsCalculation);
  return (
    <table className={classes["result"]}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
        {investmentsCalculation.map((singleInvestment, index) => {
          return (
            <tr key={index}>
              <td>{singleInvestment.year}</td>
              <td>{formatter.format(singleInvestment.savingsEndOfYear)}</td>
              <td>{formatter.format(singleInvestment.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  singleInvestment.savingsEndOfYear -
                    initialInvestment -
                    singleInvestment.yearlyContribution * singleInvestment.year
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvestment +
                    singleInvestment.yearlyContribution * singleInvestment.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

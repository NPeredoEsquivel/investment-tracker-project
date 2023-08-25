import React, { useState } from "react";
import Card from "./UI/Card/Card";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/Body/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/Body/InvestmentTable/InvestmentTable";
import classes from "./App.module.scss";
import { INVESTMENT_DICTIONARY } from "./utils/utils.js";

function App() {
  const {
    currentSaving,
    yearlyContribution,
    expectedInterest,
    investmentDuration,
  } = INVESTMENT_DICTIONARY;

  const [userInput, setUserInput] = useState([]);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput[currentSaving];
    window.userInput = userInput;
    console.log(currentSaving);
    const yearlyContributionCalc = +userInput[yearlyContribution];
    const expectedReturn = +userInput[expectedInterest] / 100;
    const duration = +userInput[investmentDuration];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContributionCalc;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContributionCalc,
      });
    }
  }

  const toggleInvestments =
    yearlyData.length > 0 ? (
      <InvestmentTable
        investmentsCalculation={yearlyData}
        initialInvestment={userInput[currentSaving]}
      />
    ) : (
      <div className={classes["no-results"]}>No investments</div>
    );

  return (
    <Card>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />
      {toggleInvestments}
    </Card>
  );
}

export default App;

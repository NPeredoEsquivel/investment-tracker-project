import React, { useState } from "react";
import classes from "./InvestmentForm.module.scss";
import Label from "../../../UI/Label/Label";
import Input from "../../../UI/Input/Input";
import InputGroup from "./InputGroup/InputGroup";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import { INVESTMENT_DICTIONARY } from "../../../utils/utils.js";

const {
  currentSaving,
  yearlyContribution,
  expectedInterest,
  investmentDuration,
} = INVESTMENT_DICTIONARY;

const defaultState = {
  [currentSaving]: "",
  [yearlyContribution]: "",
  [expectedInterest]: "",
  [investmentDuration]: "",
};

export default function InvestmentForm({ onCalculate }) {
  const [investmentValues, setInvestmentValues] = useState(defaultState);

  const onInvestmentValueChange = (event) => {
    const { name, value } = event.target;
    setInvestmentValues((prevState) => {
      return { ...prevState, [name]: +value };
    });
  };

  const onResetHandler = () => {
    setInvestmentValues(defaultState);
  };

  const addInvestmentHandler = (event) => {
    event.preventDefault();

    onCalculate(investmentValues);
  };

  return (
    <form className={classes["form"]} onSubmit={addInvestmentHandler}>
      <Card className={classes["input-group"]}>
        <InputGroup>
          <Label htmlFor="current-savings">Current Savings ($)</Label>
          <Input
            type="number"
            id="current-savings"
            name="current-savings"
            value={investmentValues[currentSaving]}
            onChangeHandler={onInvestmentValueChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="yearly-contribution">Yearly Savings ($)</Label>
          <Input
            type="number"
            id="yearly-contribution"
            name="yearly-contribution"
            value={investmentValues[yearlyContribution]}
            onChangeHandler={onInvestmentValueChange}
          />
        </InputGroup>
      </Card>
      <Card className={classes["input-group"]}>
        <InputGroup>
          <Label htmlFor="expected-return">
            Expected Interest (%, per year)
          </Label>
          <Input
            type="number"
            id="expected-return"
            name="expected-return"
            value={investmentValues[expectedInterest]}
            onChangeHandler={onInvestmentValueChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="duration">Investment Duration (years)</Label>
          <Input
            type="number"
            id="duration"
            name="duration"
            value={investmentValues[investmentDuration]}
            onChangeHandler={onInvestmentValueChange}
          />
        </InputGroup>
      </Card>
      <InputGroup className={classes["actions"]}>
        <Button
          type="reset"
          className={classes["buttonAlt"]}
          onClickHandler={onResetHandler}
        >
          Reset
        </Button>
        <Button type="submit" className={classes["button"]}>
          Calculate
        </Button>
      </InputGroup>
    </form>
  );
}

import React, { useState } from "react";
import classes from "./InvestmentForm.module.scss";
import Label from "../../../UI/Label/Label";
import Input from "../../../UI/Input/Input";
import InputGroup from "./InputGroup/InputGroup";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";

const defaultState = {
  currentSaving: "",
  yearlyContribution: "",
  expectedInerest: "",
  investmentDuration: "",
};

export default function InvestmentForm() {
  const [investmentValues, setInvestmentValues] = useState(defaultState);

  const onInvestmentValueChange = (event) => {
    const { name, value } = event.target;
    setInvestmentValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onResetHandler = () => {
    setInvestmentValues(defaultState);
  };

  const addInvestmentHandler = (event) => {
    event.prevent.default();
  };

  return (
    <form className={classes["form"]} onSubmit={addInvestmentHandler}>
      <Card className={classes["input-group"]}>
        <InputGroup>
          <Label htmlFor="current-savings">Current Savings ($)</Label>
          <Input
            type="number"
            id="current-savings"
            name="currentSaving"
            value={investmentValues.currentSaving}
            onChangeHandler={onInvestmentValueChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="yearly-contribution">Yearly Savings ($)</Label>
          <Input
            type="number"
            id="yearly-contribution"
            name="yearlyContribution"
            value={investmentValues.yearlyContribution}
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
            name="expectedInerest"
            value={investmentValues.expectedInerest}
            onChangeHandler={onInvestmentValueChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="duration">Investment Duration (years)</Label>
          <Input
            type="number"
            id="duration"
            name="investmentDuration"
            value={investmentValues.investmentDuration}
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

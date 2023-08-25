import React from "react";
import classes from "./InvestmentForm.module.scss";
import Label from "../../../UI/Label/Label";
import Input from "../../../UI/Input/Input";
import InputGroup from "./InputGroup/InputGroup";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";

export default function InvestmentForm() {
  return (
    <form className={classes["form"]}>
      <Card className={classes["input-group"]}>
        <InputGroup>
          <Label htmlFor="current-savings">Current Savings ($)</Label>
          <Input type="number" id="current-savings" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="yearly-contribution">Yearly Savings ($)</Label>
          <Input type="number" id="yearly-contribution" />
        </InputGroup>
      </Card>
      <Card className={classes["input-group"]}>
        <InputGroup>
          <Label htmlFor="expected-return">
            Expected Interest (%, per year)
          </Label>
          <Input type="number" id="expected-return" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="duration">Investment Duration (years)</Label>
          <Input type="number" id="duration" />
        </InputGroup>
      </Card>
      <InputGroup className={classes["actions"]}>
        <Button type="reset" className={classes["buttonAlt"]}>
          Reset
        </Button>
        <Button type="submit" className={classes["button"]}>
          Calculate
        </Button>
      </InputGroup>
    </form>
  );
}

export const INVESTMENT_DICTIONARY = {
  currentSaving: "current-savings",
  yearlyContribution: "yearly-contribution",
  expectedInterest: "expected-return",
  investmentDuration: "duration",
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

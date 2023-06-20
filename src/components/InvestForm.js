import React from "react";
import { useState } from "react";
import "../index.css";

const InvestForm = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [enteredYearlyContribution, setYearlyContribution] = useState("");
  const [enteredExpectedReturn, setExpectedReturn] = useState("");
  const [enteredDuration, setDuration] = useState("");

  const currentSavingsHandler = (e) => {
    setCurrentSavings(e.target.value);
  };

  const yearlyContributionHandler = (e) => {
    setYearlyContribution(e.target.value);
  };

  const expectedReturnHandler = (e) => {
    setExpectedReturn(e.target.value);
  };

  const durationHandler = (e) => {
    setDuration(e.target.value);
  };
  // reset form
  const clickResetHandler = (e) => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };
  // handle form when calculate is clicked
  const calculateHandler = (e) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    e.preventDefault();

    let userInput = {
      "current-savings": enteredCurrentSavings,
      "yearly-contribution": enteredYearlyContribution,
      "expected-return": enteredExpectedReturn,
      duration: enteredDuration,
    };
    if (
      enteredCurrentSavings.trim() !== "" &&
      enteredYearlyContribution.trim() !== "" &&
      enteredExpectedReturn.trim() !== "" &&
      enteredDuration.trim() !== ""
    ) {
      props.onCalculate(true);
    } else props.onCalculate(false);

    console.log(userInput);
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest =0;
    let investedCapital= currentSavings;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest 
      investedCapital +=yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        investedCapitalN : investedCapital,
        totalInterestN: totalInterest
      });
    }
    // console.log(yearlyData);
    // do something with yearlyData ...
    props.onCalculateDataArray(yearlyData);
  };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
            value={enteredCurrentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionHandler}
            value={enteredYearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnHandler}
            value={enteredExpectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationHandler}
            value={enteredDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button className="buttonAlt" onClick={clickResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestForm;

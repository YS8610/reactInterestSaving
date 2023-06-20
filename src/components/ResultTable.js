import React from "react";
import "../index.css";

const ResultTable = (props) => {
  let dataArray = props.yearDateArray.map((data) => {
    return (
      <tr
        key={
          data.year +
          " " +
          data.yearlyInterest +
          " " +
          data.savingsEndOfYear +
          " " +
          data.yearlyContribution
        }
      >
        <td>{data.year}</td>
        <td>${parseFloat(data.savingsEndOfYear).toFixed(2)}</td>
        <td>${parseFloat(data.yearlyInterest).toFixed(2)}</td>
        <td>${parseFloat(data.totalInterestN).toFixed(2)}</td>
        <td>${parseFloat(data.investedCapitalN).toFixed(2)}</td>
        <td></td>
      </tr>
    );
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{dataArray}</tbody>
    </table>
  );
};

export default ResultTable;

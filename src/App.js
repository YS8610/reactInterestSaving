import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import InvestForm from "./components/InvestForm";

function App() {
  // condition for displaying table
  const [isCalculated, setIsCalculated] = useState(false);
  const onCalculateHandler = (e) => {
    setIsCalculated(e);
    console.log("isCalculated = " + e);
  };

  const [calculatedDataArray, setCalculatedDataArray] = useState([]);
  const onCalculateDataArrayHandler = (e) => {
    setCalculatedDataArray(e);
    console.log(e);
  };

  return (
    <div>
      <Header />
      <InvestForm
        onCalculate={onCalculateHandler}
        onCalculateDataArray={onCalculateDataArrayHandler}
      />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {isCalculated ? (
        <ResultTable yearDateArray={calculatedDataArray} />
      ) : (
        <table className="result">There is no data</table>
      )}
    </div>
  );
}

export default App;

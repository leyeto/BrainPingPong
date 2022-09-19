import React from "react";
import Result from "../Result/Result";
import "./ResultsList.scss";

export default function ResultsList({ results }) {
  return (
    <section>
      <h2>Results:</h2>
      <div className="results__header">
        <h3>Date</h3>
        <h3>Match</h3>
        <h3>Result</h3>
      </div>
      {results.map((result, idx) => {
        return <Result result={result} key={idx} />;
      })}
    </section>
  );
}

import React from "react";
import "./Result.scss";

export default function Result({ result }) {
  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="result">
      <p>{getDate(result.timestamp)}</p>
      <p>
        {result.playerOne} vs. {result.playerTwo}
      </p>
      <p>
        {result.playerOneSets}:{result.playerTwoSets}
      </p>
    </div>
  );
}

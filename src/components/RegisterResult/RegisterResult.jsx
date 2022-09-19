import { useState } from "react";
import "./RegiterResult.scss";

export default function RegisterResult({ players, setResults }) {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerOneSets, setPlayerOneSets] = useState();
  const [playerTwoSets, setPlayerTwoSets] = useState();

  const clickHandler = (e) => {
    e.preventDefault();
    if (e.target.playerOne.value === e.target.playerTwo.value) {
      alert("You can't play against yourself!");
    } else {
      const newResult = {
        timestamp: +new Date(),
        playerOne: e.target.playerOne.value,
        playerTwo: e.target.playerTwo.value,
        playerOneSets: e.target.resultPlayerOne.value,
        playerTwoSets: e.target.resultPlayerTwo.value,
      };
      setResults((state) => [...state, newResult]);
    }
    setPlayerOne("");
    setPlayerTwo("");
    setPlayerOneSets(0);
    setPlayerTwoSets(0);
  };

  return (
    <section>
      <h2>Log a result:</h2>
      <form onSubmit={clickHandler} className="form">
        <label htmlFor="playerOne">
          Player one:
          <select
            name="playerOne"
            id="playerOne"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
            className="form__select"
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {players.map((player, idx) => {
              return (
                <option value={player.name} key={idx}>
                  {player.name}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="playerTwo">
          Player two:
          <select
            name="playerTwo"
            id="playerTwo"
            value={playerTwo}
            onChange={(e) => setPlayerTwo(e.target.value)}
            className="form__select"
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {players.map((player, idx) => {
              return (
                <option value={player.name} key={idx}>
                  {player.name}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="resultPlayerOne">
          Sets for player one:
          <select
            id="resultPlayerOne"
            name="resultPlayerOne"
            value={playerOneSets}
            onChange={(e) => setPlayerOneSets(e.target.value)}
            className="form__select"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <label htmlFor="resultPlayerTwo">
          Sets for player two:
          <select
            id="resultPlayerTwo"
            name="resultPlayerTwo"
            value={playerTwoSets}
            onChange={(e) => setPlayerTwoSets(e.target.value)}
            className="form__select"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <button className="form__button">Submit game!</button>
      </form>
    </section>
  );
}

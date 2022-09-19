import "./App.scss";

import { useState } from "react";
import RegisterPlayer from "./components/RegisterPlayer/RegisterPlayer";
import RegisterResult from "./components/RegisterResult/RegisterResult";
import PlayerList from "./components/PlayerList/PlayerList";
import ResultsList from "./components/ResultsList/ResultsList";

function App() {
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);

  return (
    <main>
      <section className="hero">
        <h1 className="hero__title">
          BSPPC - BrainStation Ping Pong Championships
        </h1>
      </section>
      <RegisterPlayer setPlayers={setPlayers} />
      <PlayerList players={players} />
      <RegisterResult players={players} setResults={setResults} />
      <ResultsList results={results} />
    </main>
  );
}

export default App;

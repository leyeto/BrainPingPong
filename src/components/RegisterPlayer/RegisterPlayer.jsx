import { useState } from "react";
import axios from "axios";

export default function RegisterPlayer({ setPlayers }) {
  const [newPlayer, setNewPlayer] = useState("");

  const registrationHandler = (e) => {
    e.preventDefault();

    const age = axios
      .get(`https://api.agify.io?name=${newPlayer}`)
      .then((res) => res.data.age);

    const joke = axios
      .get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then((res) => res.data.joke);

    const insult = axios
      .get(`https://insult.mattbas.org/api/insult`)
      .then((res) => res.data);

    Promise.all([age, joke, insult]).then((values) => {
      const newPlayerObject = {
        name: newPlayer,
        age: values[0] > 50 ? Math.round(Number(values[0]) / 2) : values[0],
        joke: values[1],
        insult: values[2],
        picture: `https://robohash.org/${newPlayer}`,
      };
      setPlayers((players) => [...players, newPlayerObject]);
    });

    setNewPlayer("");
  };

  return (
    <section>
      <h2>Register new Players</h2>
      <form onSubmit={registrationHandler}>
        <label htmlFor="newPlayer">
          Register a new player:
          <input
            type="text"
            name="newPlayer"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
            placeholder="Player name"
          />
        </label>
        <button>Register!</button>
      </form>
    </section>
  );
}

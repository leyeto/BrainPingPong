import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./PlayerList.scss";

export default function PlayerList({ players }) {
  return (
    <section>
      <h2>Participating players:</h2>
      <div className="player__list">
        {players.map((player, idx) => {
          return <PlayerCard player={player} key={idx} />;
        })}
      </div>
    </section>
  );
}

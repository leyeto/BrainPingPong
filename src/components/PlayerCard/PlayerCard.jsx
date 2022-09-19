import React from "react";
import "./PlayerCard.scss";

export default function PlayerCard(props) {
  const { name, picture, age, joke, insult } = props.player;
  return (
    <div className="card">
      <img src={picture} alt={`profile-${name}`} className="card__image" />
      <div className="card__details">
        <h2 className="card__name">{name}</h2>
        <h3>Estimated age:</h3>
        <p>{age}</p>
        <h3>Favourite joke:</h3>
        <p>{joke}</p>
        <h3>Favourite insult:</h3>
        <p>{insult}</p>
      </div>
    </div>
  );
}

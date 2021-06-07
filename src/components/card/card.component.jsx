import React from 'react';
import './card.styles.css';
//NOTE: only import children components

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="Profile"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

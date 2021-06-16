import React from 'react';
import './card-list.styles.css';

//Import other components that are children so that the Prop can be passed down
import { Card } from '../card/card.component.jsx';

//SYNTAX
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

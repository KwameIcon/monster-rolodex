import React from "react";

import './card.style.css'

export const Card = (props) => (
  <div className="card-container">
    <img alt="Monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
    <h2 className="name">{props.monster.name}</h2>
    <p className="email">{props.monster.email}</p>
  </div>
);
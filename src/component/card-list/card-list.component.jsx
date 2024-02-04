import React from "react";

import './card-list.style.css'
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <section className="card-list">
    {props.monsters.map((monster) => (
      <Card monster = {monster}/>
    ))}
  </section>
);
import React from "react";
import { generateAsteroids } from "../Objects/createAsteroids";

const Menu = () => {
  return (
    <section className="menu">
      <div className="asteroid-container">{generateAsteroids(20)}</div>
      <div className="options">
        <button>Play</button>
        <button>Options</button>
        <button>About</button>
      </div>
    </section>
  );
};

export default Menu;

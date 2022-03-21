import React from "react";
import { asteroids } from "../Objects/asteroids";

const Menu = () => {
  return (
    <section className="menu">
      {asteroids.map((item, index) => (
        <img
          key={index}
          src={item}
          className={`asteroid asteroid-${index + 1}`}
        ></img>
      ))}
      <div className="options">
        <button>Play</button>
        <button>Options</button>
        <button>About</button>
      </div>
    </section>
  );
};

export default Menu;

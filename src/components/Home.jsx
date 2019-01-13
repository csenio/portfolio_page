import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { mouse: { x: 0, y: 0 } };
  }

  render() {
    return (
      <div className="home">
        <div className="home__outline">
          <h1 className="home__title">Jesco Wuester</h1>
        </div>
        <div className="home__nav">
          <ul className="home__nav__ul">
            <li className="home__nav__ul__li">
              <NavLink className="home__nav__navlink" to="/about">
                about
              </NavLink>
            </li>
            <li className="home__nav__ul__li">
              <NavLink className="home__nav__navlink" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Game;

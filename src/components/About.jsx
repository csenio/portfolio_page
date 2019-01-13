import React, { Component } from "react";
import Socials from "./Socials";
import { NavLink } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile">
        <div className="profile__picture">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQGnpTSD2JoH7g/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=NcKblKyHd9qjGacA1Nen81vTPGVio2vv21Z4LNi6rpE"
            alt="profile"
          />
        </div>
        <Socials />
        <hr className="profile__hr" />
        <div className="profile__technologies">
          <h1 className="profile__section__title">Technologies:</h1>
          <ul>
            <li>
              <i className="profile__logo fab fa-react" /> - React
            </li>
            <li>
              <i className="profile__logo fab fa-sass" /> - Sass
            </li>
            <li>
              <span
                className="profile__logo iconify"
                data-icon="simple-icons:redux"
                data-inline="false"
              />
              - Redux
            </li>
            <li>
              <i className="profile__logo fab fa-node-js" /> - NodeJs
            </li>
          </ul>
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

export default About;

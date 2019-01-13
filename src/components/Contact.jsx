import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Socials from "./Socials";
// import Loading from "./Loading";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
  }

  submit = () => {
    const { email, name, content } = this.state;
    if (email && name && content) {
      this.setState({ submit: true });
      console.log("submitting");
      axios
        .post("https://mailthis.to/jescosocial@gmail.com", {
          email: this.state.email,
          _subject: `contact from ${this.state.name} via jescowuester.com`,
          message: this.state.content,
          _after: "http://127.0.0.1:3000/"
        })
        .then(() => {
          window.location.href = "https://mailthis.to/confirm";
        })
        .catch(err => this.setState({ error: err }));
    } else {
      this.setState({ error: "please fill in all the fields" });
    }
  };

  handlechange = (e, prop) => {
    this.setState({ [prop]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <div className="errormessage">{this.state.error}</div>
        )}
        {this.state.submit ? (
          <div className="loading">
            <span class="loader">
              <span class="loader-inner" />
            </span>
          </div>
        ) : (
          <div className="contact__outline">
            <input
              onChange={e => this.handlechange(e, "name")}
              type="text"
              placeholder="name"
              className="contact__input contact__name"
            />
            <input
              onChange={e => this.handlechange(e, "email")}
              type="text"
              placeholder="email"
              className="contact__input contact__email"
            />
            <textarea
              onChange={e => this.handlechange(e, "content")}
              placeholder="content - for highly relevant matters please contact me via emal/linkedin directly"
              name="content"
              id=""
              cols="30"
              rows="10"
              className="contact__content"
            />
            <button onClick={this.submit} className="contact__submit">
              submit
            </button>
          </div>
        )}

        <div className="contact__nav">
          <ul className="contact__nav__ul">
            <li className="contact__nav__ul__li">
              <NavLink className="contact__nav__navlink" to="/about">
                about
              </NavLink>
            </li>
            <li className="contact__nav__ul__li">
              <NavLink className="contact__nav__navlink" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Socials />
      </div>
    );
  }
}

export default Contact;

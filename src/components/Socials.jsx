import React, { Component } from "react";

class Socials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contact__icons">
        <a className="contact__icon" href="mailto:jescosocial@gmail.com">
          <i class="far fa-envelope" />
        </a>
        <a
          className="contact__icon"
          href="https://github.com/jescowuester"
          target="blank"
        >
          <i class="fab fa-github" />
        </a>
        <a
          className="contact__icon"
          href="https://www.linkedin.com/in/jescowuester/"
          target="blank"
        >
          <i class="fab fa-linkedin-in" />
        </a>
      </div>
    );
  }
}

export default Socials;

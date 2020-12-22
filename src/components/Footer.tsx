import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ position: "fixed", bottom: "0px" }}>
        <a href="p" target="_blank" rel="noopener noreferrer">
          Powered by <img src="" alt="DHBW" className="logo" />
        </a>
      </div>
    );
  }
}

export default Footer;

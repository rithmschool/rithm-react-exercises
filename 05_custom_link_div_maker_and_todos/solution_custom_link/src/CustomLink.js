import React, { Component } from "react";

class CustomLink extends Component {
  render() {
    const { href, text, openLink } = this.props;
    return (
      <div>
        <a href={href} target="_blank" onClick={openLink}>
          {text}
        </a>
      </div>
    );
  }
}

export default CustomLink;

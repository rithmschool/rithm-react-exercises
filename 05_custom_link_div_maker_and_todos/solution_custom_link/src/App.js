import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomLink from "./CustomLink";

class App extends Component {
  state = { linksDisabled: false };

  toggleDisabledLinks = () => {
    this.setState({
      linksDisabled: !this.state.linksDisabled
    });
  };

  handleClick = e => {
    if (this.state.linksDisabled) {
      e.preventDefault();
    }
  };

  render() {
    let links = [
      { href: "https://www.rithmschool.com", text: "Rithm School" },
      { href: "https://facebook.github.io/react/", text: "React Docs" },
      { href: "https://www.codewars.com/dashboard", text: "CodeWars" }
    ].map((link, idx) => (
      <CustomLink
        key={idx}
        href={link.href}
        text={link.text}
        openLink={this.handleClick}
      />
    ));

    let buttonText = this.state.linksDisabled
      ? "Enable links"
      : "Disable Links";

    let headerText = this.state.linksDisabled ? "Disabled" : "Enabled";

    return (
      <div>
        <h1>Here are some of my favorite links!</h1>
        <h2>Links are currently {headerText.toUpperCase()}.</h2>
        {links}
        <button onClick={this.toggleDisabledLinks}>{buttonText}</button>
      </div>
    );
  }
}

export default App;

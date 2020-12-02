import React, { Component } from "react";
import PortfolioNavBar from "../components/PortfolioNavBar";
import PortfolioWelcome from "../components/PortfolioWelcome";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default class NoMatch extends Component {
  render(props) {
    return (
      <div>
        <PortfolioNavBar
          darkModeApp={this.props.darkModeApp}
          toggle={this.props.toggle}
        />
        <PortfolioWelcome darkModeApp={this.props.darkModeApp} />
        No match, sorry
        <ContactForm darkModeApp={this.props.darkModeApp} />
        <Footer darkModeApp={this.props.darkModeApp} />
      </div>
    );
  }
}

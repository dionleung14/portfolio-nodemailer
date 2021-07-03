import React, { Component } from "react";
import NoMatchNavBar from "./components/NoMatchNavBar";
import NoMatchWelcome from "./components/NoMatchWelcome";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

export default class NoMatch extends Component {
  render(props) {
    return (
      <div>
        <NoMatchNavBar
          darkModeApp={this.props.darkModeApp}
          toggle={this.props.toggle}
        />
        <NoMatchWelcome darkModeApp={this.props.darkModeApp} />
        <ContactForm darkModeApp={this.props.darkModeApp} />
        <Footer darkModeApp={this.props.darkModeApp} />
      </div>
    );
  }
}

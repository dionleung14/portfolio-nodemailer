import React, { Component } from "react";

export default class PortfolioPhotoCaption extends Component {
  render(props) {
    return (
      <small
        // className="italic lg:absolute bottom-0"
        className="italic mt-2"
        onClick={this.props.handlePortfolioToggle}
        data-project={this.props.project}
      >
        {this.props.alt}
      </small>
    );
  }
}

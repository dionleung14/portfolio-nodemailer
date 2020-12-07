import React, { Component } from "react";

export default class PortfolioPhoto extends Component {
  render(props) {
    return (
      // <div className="flex flex-col items-center lg:mx-2 lg:my-2 my-4 cursor-pointer">
      // <div
      //   className="flex flex-col border border-2 border-white"
      //   onClick={this.props.handlePortfolioToggle}
      //   data-project={this.props.project}
      // >
      <img
        className="bg-white border-white border-2 w-full"
        src={this.props.photoSrc}
        alt={this.props.alt}
        // onClick={this.props.handlePortfolioToggle}
        data-project={this.props.project}
      />
      // </div>
    );
  }
}

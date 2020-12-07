import React, { Component } from "react";

export default class PortfolioPhotoFirst extends Component {
  render(props) {
    return (
      <div className="flex flex-col items-center lg:mx-2 lg:my-2 my-4 cursor-pointer">
        <img
          className="bg-white border-white border-2 w-full"
          src={this.props.photoSrc}
          alt={this.props.alt}
          onClick={this.props.handlePortfolioToggle}
          data-project={this.props.project}
        />
      </div>
    );
  }
}

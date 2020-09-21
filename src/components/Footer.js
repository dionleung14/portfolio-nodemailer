import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="w-full h-24 bg-red-300 flex justify-around items-center">
        <div>GitHub</div>
        <div>LinkedIn</div>
        <div>Email</div>
        <div>Twitter</div>
        <div>Copyright &copy; 2020</div>
      </div>
    );
  }
}

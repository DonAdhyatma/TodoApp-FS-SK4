"use client";

import { Component } from "react";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="mt-5 mb-5 flex flex-col items-center space-y-4 p-6 border border-gray-300 rounded-lg shadow-md w-fit mx-auto">
        <button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 text-white px-6 py-2 rounded-full font-bold transition duration-300 cursor-pointer" onClick={this.handleClick}>
          Click Me
        </button>
        <p className="text-gray-700 font-medium">
          Jumlah Klik: <span className="text-blue-500">{this.state.count}</span>
        </p>
      </div>
    );
  }
}

export { ButtonComponent };

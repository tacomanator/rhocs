import React, { Component } from "react";
import LogProps from "./LogProps";
import LogRerender from "./LogRerender";
import LogRerenderCount from "./LogRerenderCount";

const examples = {
  logProps: <LogProps prop1="1" prop2={2} />,
  logRerender: <LogRerender />,
  logRerenderCount: <LogRerenderCount />
};

class App extends Component {
  render() {
    console.log("Click some buttons on the page...");
    return (
      <div>
        Open your console and get to work.
        {Object.keys(examples).map(name => (
          <div key={name}>
            <h3>{name}</h3>
            {examples[name]}
          </div>
        ))}
      </div>
    );
  }
}

export default App;

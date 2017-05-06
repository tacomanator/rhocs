import React, { Component } from "react";
import ChangedProps from "./examples/ChangedProps";
import Props from "./examples/Props";
import RerenderCount from "./examples/RerenderCount";
import RerenderEvent from "./examples/RerenderEvent";

const examples = {
  changedProps: <ChangedProps />,
  props: <Props prop1="1" prop2={2} />,
  rerenderCount: <RerenderCount />,
  rerenderEvent: <RerenderEvent foo="bar" time={Date.now()} />
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

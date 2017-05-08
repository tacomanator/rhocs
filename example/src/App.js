import React, { Component } from "react";
import ConsoleLog from "./ConsoleLog";
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

const styles = {
  page: {
    marginBottom: 350
  },
  content: {
    padding: ".5em 1.5em"
  },
  log: {
    position: "fixed",
    bottom: 0,
    height: 250,
    width: "100%",
    borderTop: "2px solid #ccc",
    backgroundColor: "LightGoldenRodYellow",
    padding: ".5em 1em"
  }
};

class App extends Component {
  render() {
    console.log("Click some buttons on the page...");
    return (
      <div style={styles.page}>
        <div style={styles.content}>
          <h1>rhocs</h1>
          {Object.keys(examples).map(name => (
            <div key={name}>
              <h3>{name}</h3>
              {examples[name]}
            </div>
          ))}
        </div>
        <div style={styles.log}>
          <h4 style={{ marginTop: 0 }}>
            console.log (open the inspector to see non-stringified output)
          </h4>
          <div style={{ height: 200 }}>
            <ConsoleLog />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

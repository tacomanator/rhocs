import React, { Component } from "react";
import R from "ramda";

const styles = {
  container: {
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    listStyleType: "none",
    margin: 0,
    padding: 0
  },
  entry: {
    padding: 5,
    borderBottom: "1px solid #ccc"
  },
  part: {
    marginRight: 5
  },
  part0: {
    fontWeight: "bold"
  }
};

const Part = props => (
  <span style={{ ...styles.part, ...styles[`part${props.number}`] }}>
    {typeof props.content === "string"
      ? props.content
      : JSON.stringify(props.content)}
  </span>
);

const Entry = props => (
  <div style={styles.entry}>
    {R.tail(props.parts).map((content, partNumber) => (
      <Part key={partNumber} number={partNumber} content={content} />
    ))}
  </div>
);

class ConsoleLog extends Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  componentWillMount() {
    this.realLog = console.log;
    console.log = this.log;
  }

  componentWillUnmount() {
    console.log = this.realLog;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.container.scrollTop = this.container.scrollHeight;
  };

  log = (...entry) => {
    this.realLog(...entry);
    this.setState({ entries: R.append(entry, this.state.entries) });
  };

  render() {
    return (
      <ul style={styles.container} ref={div => (this.container = div)}>
        {this.state.entries.map((entry, entryNumber) => (
          <li key={entryNumber}>
            <Entry parts={entry} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ConsoleLog;

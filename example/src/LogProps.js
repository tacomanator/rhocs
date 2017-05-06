import React from "react";
import { compose } from "recompose";
import logProps from "../lib/logProps";
import example from "./example";

const LogProps = props => (
  <div>
    <button onClick={props.update}>Log my props</button>
  </div>
);

const enhance = compose(example, logProps());

export default enhance(LogProps);

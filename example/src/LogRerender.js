import React from "react";
import { compose } from "recompose";
import example from "./example";
import logRerender from "../lib/logRerender";

const LogRerender = props => (
  <button onClick={props.update}>Cause an update</button>
);

const enhance = compose(example, logRerender);

export default enhance(LogRerender);

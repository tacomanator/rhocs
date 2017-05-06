import React from "react";
import { compose } from "recompose";
import logRerenderedCount from "../lib/logRerenderedCount";
import example from "./example";

const LogRerenderedCount = props => (
  <button onClick={props.update}>Cause an update</button>
);

const enhance = compose(example, logRerenderedCount);

export default enhance(LogRerenderedCount);

import React from "react";
import { compose } from "recompose";
import example from "./example";
import logRerenderCount from "../lib/logRerenderCount";

const LogRerenderCount = props => (
  <button onClick={props.update}>Cause an update</button>
);

const enhance = compose(example, logRerenderCount);

export default enhance(LogRerenderCount);

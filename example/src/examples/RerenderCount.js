import React from "react";
import { compose } from "recompose";
import example from "../example";
import rerenderCount from "../../lib/rerenderCount";

const RerenderCount = props => (
  <button onClick={props.update}>Cause an update</button>
);

const enhance = compose(example, rerenderCount);

export default enhance(RerenderCount);

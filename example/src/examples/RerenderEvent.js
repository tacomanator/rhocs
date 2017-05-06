import React from "react";
import { compose } from "recompose";
import example from "../example";
import rerenderEvent from "../../lib/rerenderEvent";

const RerenderEvent = props => (
  <button onClick={props.update}>Cause an update</button>
);

const enhance = compose(example, rerenderEvent);

export default enhance(RerenderEvent);

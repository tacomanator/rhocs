import React from "react";
import { compose } from "recompose";
import example from "../example";
import changedProps from "../../lib/changedProps";

const ChangedProps = props => (
  <button onClick={props.update}>Update props</button>
);

const enhance = compose(example, changedProps);

export default enhance(ChangedProps);

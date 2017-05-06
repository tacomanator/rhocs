import React from "react";
import R from "ramda";
import { compose } from "recompose";
import example from "./example";
import logProps from "../lib/logProps";

const LogProps = props => <button onClick={props.update}>Log my props</button>;

const enhance = compose(example, logProps(R.omit(["update"])));

export default enhance(LogProps);

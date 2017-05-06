import React from "react";
import R from "ramda";
import { compose } from "recompose";
import example from "../example";
import props from "../../lib/props";

const Props = props => <button onClick={props.update}>Log my props</button>;

const enhance = compose(example, props(R.omit(["update"])));

export default enhance(Props);

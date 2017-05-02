import React from "react";
import R from "ramda";

export default selector => WrappedComponent => {
  let finalSelector;
  if (R.isNil(selector)) {
    finalSelector = R.identity;
  } else if (selector instanceof Array) {
    finalSelector = R.props(propsSelector);
  } else if (typeof selector === "string") {
    finalSelector = R.prop(propsSelector);
  } else if (typeof selector === "function") {
    finalSelector = propsSelector;
  }

  return props => {
    console.log(WrappedComponent.name, finalSelector(props));
    return <WrappedComponent {...props} />;
  };
};

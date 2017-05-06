import React from "react";
import R from "ramda";

export default selector => WrappedComponent => {
  let finalSelector;
  if (R.isNil(selector)) {
    finalSelector = R.identity;
  } else if (selector instanceof Array) {
    finalSelector = R.props(selector);
  } else if (typeof selector === "string") {
    finalSelector = R.prop(selector);
  } else if (typeof selector === "function") {
    finalSelector = selector;
  }

  return props => {
    console.log(WrappedComponent.name, "props", finalSelector(props));
    return <WrappedComponent {...props} />;
  };
};

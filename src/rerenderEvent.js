import React from "react";
import R from "ramda";

export default WrappedComponent => props => {
  console.log(WrappedComponent.name, "rerenderEvent");
  return <WrappedComponent {...props} />;
};
import React from "react";

export default WrappedComponent => class RerenderedCount
  extends React.Component {
  constructor(props) {
    super(props);
    this.rerenderedCount = 0;
  }

  render() {
    this.rerenderedCount = this.rerenderedCount + 1;
    console.log(WrappedComponent.name, "rerenderedCount", this.rerenderedCount);
    return <WrappedComponent {...this.props} />;
  }
};

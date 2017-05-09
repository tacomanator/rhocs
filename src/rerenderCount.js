import React, { Component } from "react";

export default WrappedComponent => class RerenderCount extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }

  componentDidUpdate() {
    this.count = this.count + 1;
    console.log(WrappedComponent.name, "rerenderCount", this.count);
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

import React, { Component } from "react";

export default WrappedComponent => class RerenderEvent extends Component {
  componentDidUpdate() {
    console.log(WrappedComponent.name, "rerenderEvent");
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

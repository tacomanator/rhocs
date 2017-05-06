import React, { Component } from "react";

export default WrappedComponent => class ChangedProps extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const changes = {};
    for (var prop in this.props) {
      if (this.props[prop] !== nextProps[prop]) {
        changes[prop] = nextProps[prop];
      }
    }

    if (0 < Object.keys(changes).length) {
      console.log(WrappedComponent.name, "changedProps", changes);
      return true;
    }
    return false;
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

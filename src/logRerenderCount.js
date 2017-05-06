import React from "react";

export default WrappedComponent => class RerenderCount extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }

  render() {
    this.count = this.count + 1;
    console.log(WrappedComponent.name, "rerenderCount", this.count);
    return <WrappedComponent {...this.props} />;
  }
};

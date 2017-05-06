import React from "react";

export default WrappedComponent => {
  return class RerenderedCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = { dummy: 0 };
    }

    update = () => this.setState({ dummy: this.state.dummy + 1 });

    render() {
      return <WrappedComponent update={this.update} {...this.props} />;
    }
  };
};

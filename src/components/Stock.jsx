import React from "react";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, stock: {} };
  }

  componentWillMount = () => {
    console.log(this.props.stock);
    this.setState({ loaded: true, stock: this.props.stock });
  };

  render() {
    let symbol;
    if (this.state.loaded === false) {
      symbol = <h3>Loading...</h3>;
    } else if (this.state.loaded === true) {
      symbol = <h3>{this.state.stock["1. symbol"]}</h3>;
    }
    return <h3>{symbol}</h3>;
  }
}

export default Stock;

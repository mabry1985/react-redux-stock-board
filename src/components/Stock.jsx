import React from "react";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, stock: {} };
  }

  componentWillMount = () => {
    this.setState({ loaded: true, stock: this.props.stock });
  };

  render() {
    let stock;
    if (this.state.loaded === false) {
      stock = (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else if (this.state.loaded === true) {
      stock = (
        <div>
          <h3>{this.state.stock["1. symbol"]}</h3>
          <h3>{this.state.stock["2. price"]}</h3>
        </div>
      );
    }
    return stock;
  }
}

export default Stock;

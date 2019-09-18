import React from "react";
import { connect } from "react-redux";
import { addSymbol } from "./../actions/index.js";

class AddSymbolForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: ""
    };
  }

  handleChange = () => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    event.preventDefault();
    this.props.dispatch(addSymbol(this.state.symbol));
    this.props.onNewStockSymbol();
    this.setState({ symbol: "" });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Symbol:</label>
        <input
          type="text"
          name="symbol"
          onChange={this.handleChange}
          value={this.state.symbol.value}
        />
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(AddSymbolForm);

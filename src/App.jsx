import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadStocks } from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  // call the API and get the data when App enters the dom
  componentDidMount() {
    fetch(
      `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${
        process.env["API_KEY"]
      }&symbols=AAPL,MSFT`
    )
      .then(res => res.json())
      .then(response => console.log(response));
  }

  render() {
    return (
      <BrowserRouter>
        <h1>App is working</h1>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(
  mapStateToProps,
  { loadStocks }
)(App);

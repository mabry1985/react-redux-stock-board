import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadStocks } from "./actions/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  // call the API and get the data when App enters the dom
  componentDidMount = () => {
    fetch(
      `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${
        process.env["API_KEY"]
      }&symbols=AAPL,MSFT`
    )
      .then(res => res.json())
      .then(response => {
        console.log("API Response: ", response);
        console.log(this);
        this.props.dispatch(loadStocks(response));
        // this is kinda wonky but it lets the app update??
        this.setState(this.props.state);
        console.log("this is app state ", this.state);
      });
  };

  render() {
    let loader;
    if (this.state.stocks.loaded === false) {
      loader = <h1>Loading...</h1>;
    } else if (this.state.stocks.loaded === true) {
      loader = <h1>Loaded!!</h1>;
    }
    return (
      <BrowserRouter>
        <div>{loader}</div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(App);

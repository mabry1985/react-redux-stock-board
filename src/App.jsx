import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadStocks, addSymbol, removeSymbol } from "./actions/index.js";
import { v4 } from "uuid";

// components
import StockList from "./components/StockList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: v4() };
  }

  callAlphaVantageApi = () => {
    console.log("Calling API");
    fetch(
      `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${
        process.env["API_KEY"]
      }&symbols=${this.props.state.symbols.join()}`
    )
      .then(res => res.json())
      .then(response => {
        console.log("API Response: ", response);
        this.props.dispatch(loadStocks(response));
      });
  };

  handleNewStockSymbol = () => {
    this.callAlphaVantageApi();
    this.setState({ key: v4() });
  };

  componentWillMount = () => {
    this.callAlphaVantageApi();
  };

  // call the API and get the data when App enters the dom
  componentDidMount = () => {
    this.apiCallTimer = setInterval(
      () => this.callAlphaVantageApi(),
      1000 * 60 // 60 seconds
    );
  };

  componentWillUnmount = () => {
    clearInterval(this.apiCallTimer);
  };

  render() {
    let loader;
    if (this.props.state.loaded === false) {
      loader = <h1>Loading...</h1>;
    } else if (this.props.state.apiData.loaded === true) {
      loader = <h1>Loaded!!</h1>;
    }

    return (
      <BrowserRouter>
        <div>
          {loader}
          <StockList
            key={this.state.key}
            onNewStockSymbol={this.handleNewStockSymbol}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(App);

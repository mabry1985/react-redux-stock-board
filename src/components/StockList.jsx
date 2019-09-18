import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
// components
import Stock from "./Stock.jsx";
import AddSymbolForm from "./AddSymbolForm.jsx";

class StockList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const apiData = this.props.state.apiData;
    let loader;
    if (apiData.loaded === true) {
      loader = apiData.stocks["Stock Quotes"].map(stock => {
        return <Stock key={v4()} stock={stock} />;
      });
    }
    return (
      <div>
        <h1>This is the StockList</h1>
        <AddSymbolForm onNewStockSymbol={this.props.onNewStockSymbol} />
        {loader}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};
export default connect(mapStateToProps)(StockList);

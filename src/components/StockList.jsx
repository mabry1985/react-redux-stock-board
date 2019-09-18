import React from "react";
import Stock from "./Stock.jsx";
import { connect } from "react-redux";
import { v4 } from "uuid";

class StockList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const apiData = this.props.state.apiData;
    let loader;
    if (apiData.loaded === true) {
      console.log(apiData.stocks["Stock Quotes"]);
      loader = apiData.stocks["Stock Quotes"].map(stock => {
        return <Stock key={v4()} stock={stock} />;
      });
      console.log(loader);
    }
    return (
      <div>
        <h1>This is the StockList</h1>
        {loader}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};
export default connect(mapStateToProps)(StockList);

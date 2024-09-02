import React from "react";
import { Countryname } from "./components/Countryname";
import "./components/Countryname.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };
  }
  watch = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };
  componentDidMount() {
    setInterval(this.watch, 1000);
  }

  render() {
    return (
      <div className="body">
        <h4 className="time">
          {this.state.date}
          <span>, </span>
          {this.state.time}
        </h4>

        <h1 className="pageHeader">Daily News</h1>
        <h4>Select the Nation for the Daily Breaking News</h4>

        <Countryname />
        {/* <News /> */}
      </div>
    );
  }
}
export default App;

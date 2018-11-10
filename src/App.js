import React, { Component } from "react";
import "./App.css";
import QueueCounter from "./QueueCounter";
import Bartenders from "./bartenders";
import BeerInfo from "./BeerInfo";
const FooBar = window.FooBar;
class App extends Component {
  state = {
    bar: JSON.parse(FooBar.getData())
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        bar: JSON.parse(FooBar.getData())
      });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <QueueCounter queueLength={this.state.bar.queue} />
        <Bartenders bartenders={this.state.bar.bartenders} />
        <BeerInfo beertypes={this.state.bar.beertypes} />
      </div>
    );
  }
}

export default App;

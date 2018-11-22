import React, { Component } from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Navbar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route render={() => <h1>4040</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;

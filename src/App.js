import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import appData from "./appData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appData={appData} />
        <About appData={appData} />
        <Resume appData={appData} />
        <Portfolio appData={appData} />
      </div>
    );
  }
}

export default App;

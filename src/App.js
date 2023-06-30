import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

class App extends Component {

  /* Root element wrapped in browser router. Defines the way the url is stored */
  render() {
    return (
      <BrowserRouter> 
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
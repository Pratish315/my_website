import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

class App extends Component {

  /* View width high in pixels*/
  componentDidMount() {
    const handleResize = () => {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      console.log('Current width: ' + screenWidth + 'px');
      console.log('Current height: ' + screenHeight + 'px');
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

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
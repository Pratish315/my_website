import './App.css';
import {React, Component} from 'react';
import Home from './Components/Home/Home';
import Particles from './Components/Particles/Particles'
class App extends Component {
  

  render(){ 
    return (
      <div className="App">
        
        <p> Hello </p>   
        <Home />
      </div>
    );
  }


}

export default App;

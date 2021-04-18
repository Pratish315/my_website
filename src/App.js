import './App.css';
import {React, Component} from 'react';
import SideBar from './Components/SideBar/SideBar';
import Content from './Components/Content/Content';

class App extends Component {
  

  render(){ 
    return (
      <div className="grid">
        <div> <SideBar /> </div>
        <div> 2 </div>
      </div>
    );
  }


}

export default App;

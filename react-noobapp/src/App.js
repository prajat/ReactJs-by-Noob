import React from 'react';
import {Component} from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>hey rajat</h1>

        <Person />
      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
    );
  }
  
}

export default App;

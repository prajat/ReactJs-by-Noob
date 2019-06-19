import React from 'react';
import {Component} from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>React App</h1>
        <p>this is really working!!!</p>
        <Person name="rajat" age="21"/>
        <Person name="lokesh" age="19">i'am the best</Person>
        <Person name="sarvjeet" age="21"/>
      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
    );
  }
  
}

export default App;

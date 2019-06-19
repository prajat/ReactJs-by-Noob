import React, {Component} from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component{
  state={
    persons:[
      {name:'dhruv',age:'22'},
      {name:'shankar',age:'21'},
      {name:'jaden',age:'20'}
    ]
  }

  switchnameHandler=()=>{
    alert("clicked");
  }

  
  render(){
    
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.state.switchnameHandler}>Switch Names!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>and i'am the best</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
    );
  }
  
}

export default App;

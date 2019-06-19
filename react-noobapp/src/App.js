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

  switchnameHandler = (newName)=>{
    // window.alert("clicked");
    // console.log("hey from console");
    this.setState({
      persons:[
        {name:newName,age:'21'},
        {name:'lokesh',age:'19'},
        {name:'sarvjeet',age:'22'}
      ]

    });
  }
  
  render(){
    
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchnameHandler.bind(this,'syre')}>Switch Names!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchnameHandler.bind(this,'erys')} >and i'am the best</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
    );
  }
  
}

export default App;

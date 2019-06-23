import React, {Component} from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component{
  state={
    persons:[
      {name:'dhruv',age:'22'},
      {name:'shankar',age:'21'},
      {name:'jaden',age:'20'}
    ],
    showPersons:false

  }
  

  switchnameHandler = ()=>{
    // window.alert("clicked");
    // console.log("hey from console");
    this.setState({
      persons:[
        {name:'rajat',age:'21'},
        {name:'lokesh',age:'19'},
        {name:'sarvjeet',age:'22'}
      ]

    });
  }

  //use for change name when click on p of person card

  changeNameHandler=(event)=>{
    this.setState({
      persons:[
        {name:'rajat',age:'21'},                 
        {name:event.target.value,age:'19'},
        {name:'sarvjeet',age:'22'}
      ]

    });
  }
  
  togglePersonHandler=()=>{
    const showstatus=this.state.showPersons;
    this.setState({showPersons:!showstatus});
  }

  deletePersonHandler=(personIndex)=>{
    //const persons =this.state.persons.slice();   ES5 method for create a copy of array and object
    //const persons=this.state.persons; this is wrong approach as in js arrays and objexct are refernces types so it will create a reference not a copy
    const persons=[...this.state.persons];
    persons.splice(personIndex,1); 
    this.setState({persons:persons});
  }
  
  render(){

    let persons=null;
    if(this.state.showPersons){
      persons=(
            <div>
              {this.state.persons.map((person,index)=>{
                return(
                  <Person 
                  name={person.name}
                  age={person.age}
                  click={()=>this.deletePersonHandler(index)}/>
                )
              })}
            </div>

      );
    }
    
    return (
      <div className="App">
        <h1>React App</h1>
        <button className="App__button" onClick={this.switchnameHandler}>Switch Names!</button>
        <br />
        <button className="App__button" onClick={this.togglePersonHandler}>Show Names!</button>
        {persons}

      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
      // this.switchnameHandler.bind(this,'kite') for dynamic pass value to state change
    );
  }
  
}

export default App;

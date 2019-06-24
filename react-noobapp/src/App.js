import React, {Component} from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component{
  state={
    persons:[
      {id:'1',name:'dhruv',age:'22'},
      {id:'2',name:'shankar',age:'21'},
      {id:'3',name:'jaden',age:'20'}
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

  changeNameHandler=(event,id)=>{

    //to find personindex we can use lodash findundex method refer in other project
    const personIndex=this.state.persons.findIndex((p)=>{
      return p.id===id;
    });
    const persons=[...this.state.persons];   //can also be done by lodash clone deep method.
    persons[personIndex].name=event.target.value;
    this.setState({persons:persons});
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
                  key={person.id}
                  id={person.id}
                  click={()=>this.deletePersonHandler(index)}
                  change={this.changeNameHandler} />
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

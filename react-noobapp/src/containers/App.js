import React, {PureComponent} from 'react';     //pure component is beteer as it call shouldComponentupdate() method to check any real diff in dom 
import './App.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent{
  constructor(props){
    super(props);
    console.log("[app.js] from constructor()",props);
    this.state={
      persons:[
        {id:'1',name:'dhruv',age:'22'},
        {id:'2',name:'shankar',age:'21'},
        {id:'3',name:'jaden',age:'20'}
      ],
      showPersons:false
  
    };
  }
  
  componentWillMount(){
    console.log("[app.js] from willmount()");
  }
  componentDidMount(){
    console.log("[app.js] from didmount()")
  }
  
  
  switchnameHandler = ()=>{
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

    console.log("hello from render");

    let persons=null;
    if(this.state.showPersons){
      persons=(
          
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}/>

      );
    } 
    
    return (
      <div className="App">
        <Cockpit 
        apptitle={this.props.title}
        nameChange={this.switchnameHandler}
        togglePerson={this.togglePersonHandler}/>
        {persons}

      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
      // this.switchnameHandler.bind(this,'kite') for dynamic pass value to state change
    );
  }
  
}

export default App;

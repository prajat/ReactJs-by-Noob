import React, {Component} from'react';
import Person from './Person/Person'          

class Persons extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] from constructor()",props);
      }
       
      componentWillMount(){
        console.log("[Person.js] from willmount()");
      }
      componentDidMount(){
        console.log("[Person.js] from didmount()")
      }
    
      render(){
        return this.props.persons.map((person,index)=>{
            return(
                <Person 
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  id={person.id}
                  click={()=>this.props.clicked(index)}
                  change={this.props.changed} />
            );
        });
    }
    
}


export default Persons;    
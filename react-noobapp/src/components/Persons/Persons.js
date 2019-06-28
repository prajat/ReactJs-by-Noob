import React, {PureComponent} from'react';
import Person from './Person/Person'          

class Persons extends PureComponent{
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
          console.log("[person.js] from render()")
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
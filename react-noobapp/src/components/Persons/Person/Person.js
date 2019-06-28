import React,{Component} from 'react';
class Person extends Component{

    render(){

        return (  
            <div className="person">
                <p onClick={this.props.click}>Hey, I am {this.props.name} and i'm {this.props.age} years old</p>
                {/* <p>{this.props.children}</p>    */}
                <input className="person__name" type="text" onChange={(event)=>{
                    this.props.change(event,this.props.id);
                }} value={this.props.name}></input> 
            </div>
        )
    }
    
};
export default Person; 
import React from 'react';

const cockpit=(props)=>{
    return(
        <React.Fragment>
            <h1>{props.apptitle}</h1>
            <button className="App__button" onClick={props.nameChange}>Switch Names!</button>
            <br />
            <button className="App__button" onClick={props.togglePerson}>Show Names!</button>

        </React.Fragment>
    );

}
export default cockpit;
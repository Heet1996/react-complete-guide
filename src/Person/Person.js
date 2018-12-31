import React from 'react';
import Radium from 'radium';
import './Person.css';
const Person=(props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'70%',
            display:'inline-block'
        }
    };
    return(
        <div style={style} className="Person">
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/>
        </div>
    );
}
export default Radium(Person);
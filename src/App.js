import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {
        name:'Heet',
        age:20
      },
      {
        name:'John',
        age:22
      },
      {
        name:'Max',
        age:23
      }
    ]
  }
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName,age:20},
        {name:'joey',age:22},
        {name:'Max', age:23}
      ]
    })
  }
  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Mark',age:20},
        {name:event.target.value,age:22},
        {name:'Max', age:23}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi,there </h1>
        <button onClick={()=>this.switchNameHandler('rachel')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this,'Ross')}
        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler}
        >My Hobbies are:Running</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

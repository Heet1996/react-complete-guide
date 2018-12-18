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
    ],
    toggleValue:false
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
  toggleChangeHandler=()=>{
    this.setState({
      toggleValue:true
    })
  }
  render() {
    const style={
      backgroudColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      margin:'16px 8px'
    }

    let persons=null;
    if(this.state.toggleValue)
    {
      persons=(
        <div>
          
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
      )
    }
    return (
      
      <div className="App">
        <h1>Hi,there </h1>
        <button 
        onClick={()=>this.switchNameHandler('rachel')}
        style={style}
        >Switch Name</button>
        <button 
        onClick={this.toggleChangeHandler}
        style={style}
        >Toggle it</button>
       {/* Alternate way to toogle */}
        {/* {this.state.toggleValue?
        <div>
          
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
        :null
        }  */}

        {persons}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons:[
      { id:'1',
        name:'Heet',
        age:20
      },
      { id:'2',
        name:'John',
        age:22
      },
      { id:'3',
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
  nameChangeHandler=(event,id)=>{
    const persons=[...this.state.persons];
    const person=persons.find((person)=>person.id===id);
    person.name=event.target.value;
    this.setState({
    persons:persons  
    })
  }
  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.persons;  //Refernce of array is store ,Do not modify state of person directly
    //const persons=this.state.persons.slice(); //Better is to create new array (ES5 way to create new array)  
    const persons=[...this.state.persons] ;//ES6 way to create new array
    persons.splice(personIndex,1);    
    this.setState({persons:persons});
  }
  toggleChangeHandler=()=>{
    this.setState({
      toggleValue:true
    })
  }
  render() {
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      margin:'16px 8px',
     
    }
    let persons=null;
    if(this.state.toggleValue)
    {
      persons=(
        <div>
        {this.state.persons.map((person,index)=>{
          console.log(person);
          return (
            <Person 
            name={person.name} 
            age={person.age} 
            click={this.deletePersonHandler.bind(this,index)}
            changed={(event)=>this.nameChangeHandler(event,person.id)}
            key={person.id}/>
            
          )
        
        })
          
        }  
        {/* <Person 
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
        age={this.state.persons[2].age} /> */}
        
        
        </div>
      )
      style.backgroundColor='red';
     
    }
    const classes=[];
    if(this.state.persons.length<=1)
    {
      classes.push('bold');
    }
    if(this.state.persons.length<=2)
    {
      classes.push('red');
    }
    return (
      
      <div className="App">
        <p className={classes.join(' ')}>Hi,there I am really working </p>
        <button 
        onClick={()=>this.switchNameHandler('rachel')}
        style={style}
        key="key1" 
        >Switch Name</button>
        <button 
        onClick={this.toggleChangeHandler}
        style={style}
        key="key2"
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

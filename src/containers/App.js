import React, { Component } from 'react';
import classes from './App.module.scss';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
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
 
    let persons=null;
    let btnClass=[classes.App__button];
    if(this.state.toggleValue)
    {
      persons=(
        <div>
        {this.state.persons.map((person,index)=>{
          console.log(person);
          return (
            <ErrorBoundary key={person.id}>
            <Person 
            name={person.name} 
            age={person.age} 
            click={this.deletePersonHandler.bind(this,index)}
            changed={(event)=>this.nameChangeHandler(event,person.id)}/>
            </ErrorBoundary>
            
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
      btnClass.push(classes.App__button__Red);
     
    }
    const assignedClasses=[];
    console.log(classes);
    if(this.state.persons.length<=1)
    {
      assignedClasses.push(classes.bold);
      
    }
    if(this.state.persons.length<=2)
    {
      assignedClasses.push(classes.red);
    }
    return (
      
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>Hi,there I am really working </p>
        <button 
        onClick={()=>this.switchNameHandler('rachel')}
        key="key1" 
        >Switch Name</button>
        <button 
        onClick={this.toggleChangeHandler}
        className={btnClass.join(' ')}
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

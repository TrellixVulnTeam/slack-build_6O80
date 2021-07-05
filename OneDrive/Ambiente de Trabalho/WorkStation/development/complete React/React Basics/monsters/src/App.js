
import './App.css';
import React, { Component } from 'react';

//importing the cardList divcomponent we created 
import { CardList} from "./components/card-list/card-list.components";

import {SearchBox} from "./components/searchBox/searBox.component";


//this is a class component
class App extends Component {


  constructor () {

    super();

    this.state = {

      monsters:[],
      searchField: ""
      
    };
    
    
  }

  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = event =>  {
    this.setState({searchField: event.target.value});
  }

  render () {

    /*
    same as this but quicker
    const monster = this.state.monsters;
    const searchField = this.state.searchField;
     */

    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()) 
      )
    
    
   
    return (

      <div className="App">

        <h1>Monsters Rolodex</h1>
    
      <SearchBox 

      placeholder = "Search Monsters"

      handleChange = {this.handleChange}
      />

        <CardList monsters={filteredMonsters}/> 
        
        
    </div>
    )
  }
  
}

export default App;

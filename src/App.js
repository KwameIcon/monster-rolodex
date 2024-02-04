import React from "react";

import './App.css'
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchQuery: "",
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
  }

  handleChange = (e) => {
    this.setState({searchQuery: e.target.value})
  }

  render(){
    
    const { monsters, searchQuery} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()))


    return (
      <main className="App">
        <h1 className="page-header">Monster Rolodex</h1>
        <SearchBox
          placeholder = "Search Monsters"
          handleChange = {this.handleChange}
        />
        <p>{this.state.searchField}</p>
        <CardList monsters={filteredMonsters} />
      </main>
    );
  }
}

export default App;
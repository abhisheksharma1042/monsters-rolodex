//Importing React. Note: format for Component destructuring allows pull properties from ... and set them to constants(Components)
import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/cardlist/card-list.component.jsx';
import { SearchBox } from './components/searchbox/search-box.component';

class App extends Component {
  constructor() {
    super();
    //Setup State
    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //Make call to API for getting a list of monsters in JSON  format
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //State is passed as Prop to CardList
    // i.e. STATE is set
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

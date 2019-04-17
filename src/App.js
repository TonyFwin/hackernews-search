import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'GraphQL',
    url: 'https://graphql.org/',
    author: 'Angel Gomez',
    num_comments: 1,
    points: 3,
    objectID: 2
  }
];

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDimiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDimiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

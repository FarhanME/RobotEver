import React, { Component } from "react";
import "./App.css";
import Cardlist from "./components/Cardlist";
import Search from "./components/search";
import Scroll from "./components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }


  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };


  render() {
    const {robots, searchField} = this.state;
    
    const filterRobots = robots.filter((robots) => {
      return robots.username.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h3>RoboEver</h3>
          <Search searchChange={this.onSearchChange} />
          <Scroll>
            <Cardlist robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

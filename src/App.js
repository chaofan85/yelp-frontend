import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import ResultList from "./components/resultList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <SearchBar />
          <ResultList />
        </main>
      </div>
    );
  }
}

export default App;

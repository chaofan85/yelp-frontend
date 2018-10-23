import React from "react";
import { connect } from "react-redux";
import { searchByLocation, currentLocation } from "../actions/searchActions";
import "./searchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputBody: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.inputBody) return;
    this.props.searchByLocation(this.state.inputBody);
    this.props.currentLocation(this.state.inputBody);
  }

  handleChange() {
    return e => {
      this.setState({ inputBody: e.target.value });
    };
  }

  render() {
    return (
      <div className="searchbar-container">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Look for the restaurants in your city"
            name="search"
            value={this.state.inputBody}
            onChange={this.handleChange()}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchByLocation: location => dispatch(searchByLocation(location)),
    currentLocation: location => dispatch(currentLocation(location))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

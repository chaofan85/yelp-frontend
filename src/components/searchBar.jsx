import React from "react";
import { connect } from "react-redux";
import { searchByLocation } from "../actions/searchActions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputBody: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchByLocation(this.state.inputBody);
  }

  handleChange() {
    // console.log(this.state.inputBody);
    return e => {
      this.setState({ inputBody: e.target.value });
    };
  }

  render() {
    return (
      <div className="searchbar-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={this.state.inputBody}
            onChange={this.handleChange()}
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchByLocation: location => dispatch(searchByLocation(location))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

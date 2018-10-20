import React, { Component } from "react";
import "./App.css";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    let API_KEY =
      "qAprBH0u-bIsf-RR_YF6wPToU-Ic-Nc3_XFPGnVXq4thwe1N0U2Fk5WrCCXe9jariZ28mwTtpekVGI9pI8BnUOCjQlRYVTNFJKitoYUyHArfFqPMhvb6L5Rk-D7LW3Yx";
    $.ajax({
      url:
        "https://enigmatic-depths-85235.herokuapp.com/https://api.yelp.com/v3/businesses/search",
      headers: { Authorization: `Bearer ${API_KEY}` },
      // jsonp: "callback",
      dataType: "json",
      data: {
        location: "nyc"
        // format: "json"
      },
      success: function(response) {
        console.log(response); // server response
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("jqXHR:");
        console.log(jqXHR);
        console.log("textStatus:");
        console.log(textStatus);
        console.log("errorThrown:");
        console.log(errorThrown);
      }
    });
  }
  render() {
    return (
      <div>
        <div>Hello</div>
      </div>
    );
  }
}

export default App;

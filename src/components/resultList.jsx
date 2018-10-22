import React from "react";
import { connect } from "react-redux";
import RestaurantItem from "./restaurantItem";
import "./resultList.css";

class ResultList extends React.Component {
  componentDidMount() {
    if (this.props.restaurants.length) {
      console.log(this.props.restaurants);
    }
  }
  render() {
    console.log(this.props.restaurants);
    const restaurants = this.props.restaurants
      ? this.props.restaurants.map(res => {
          return (
            <RestaurantItem
              key={res.id}
              name={res.name}
              location={res.location}
              categories={res.categories}
              image={res.image_url}
              rating={res.rating}
              price={res.price}
              phone={res.display_phone}
              url={res.url}
            />
          );
        })
      : null;
    return (
      <section className="search-result">
        <ul className="restaurant-list">{restaurants}</ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  };
}

export default connect(
  mapStateToProps,
  null
)(ResultList);

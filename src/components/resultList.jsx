import React from "react";
import { connect } from "react-redux";
import RestaurantItem from "./restaurantItem";
import "./resultList.css";

class ResultList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      sortByPriceFromHigh: false,
      sortByPriceFromLow: false,
      sortByRatingFromHigh: false,
      sortByRatingFromLow: false,
      sortedList: []
    };
  }
  sortPriceFromLow = () => {
    if (this.state.sortByPriceFromLow) {
      this.setState({
        sortedList: [],
        sortByPriceFromLow: false
      });
      return;
    }
    let prices = this.props.restaurants.filter(res => res.price);
    let sorted = prices.sort(
      (res1, res2) => res1.price.length - res2.price.length
    );

    this.setState({
      sortedList: sorted,
      sortByPriceFromLow: true,
      sortByPriceFromHigh: false,
      sortByRatingFromHigh: false,
      sortByRatingFromLow: false
    });
  };

  sortPriceFromHigh = () => {
    if (this.state.sortByPriceFromHigh) {
      this.setState({
        sortedList: [],
        sortByPriceFromHigh: false
      });
      return;
    }
    let prices = this.props.restaurants.filter(res => res.price);
    let sorted = prices.sort(
      (res1, res2) => res2.price.length - res1.price.length
    );

    this.setState({
      sortedList: sorted,
      sortByPriceFromHigh: true,
      sortByPriceFromLow: false,
      sortByRatingFromHigh: false,
      sortByRatingFromLow: false
    });
  };

  sortRatingFromLow = () => {
    if (this.state.sortByRatingFromLow) {
      this.setState({
        sortedList: [],
        sortByRatingFromLow: false
      });
      return;
    }
    let ratings = this.props.restaurants.filter(res => res.rating);
    let sorted = ratings.sort((res1, res2) => res1.rating - res2.rating);

    this.setState({
      sortedList: sorted,
      sortByRatingFromLow: true,
      sortByRatingFromHigh: false,
      sortByPriceFromLow: false,
      sortByPriceFromHigh: false
    });
  };

  sortRatingFromHigh = () => {
    if (this.state.sortByRatingFromHigh) {
      this.setState({
        sortedList: [],
        sortByRatingFromHigh: false
      });
      return;
    }
    let ratings = this.props.restaurants.filter(res => res.rating);
    let sorted = ratings.sort((res1, res2) => res2.rating - res1.rating);

    this.setState({
      sortedList: sorted,
      sortByRatingFromHigh: true,
      sortByRatingFromLow: false,
      sortByPriceFromLow: false,
      sortByPriceFromHigh: false
    });
  };

  // componentDidUpdate() {
  //   console.log(this.props.location );
  // }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location);
    console.log(this.props.location);

    if (nextProps.location !== this.props.location) {
      this.setState({
        sortByPriceFromHigh: false,
        sortByPriceFromLow: false,
        sortByRatingFromHigh: false,
        sortByRatingFromLow: false,
        location: nextProps.location,
        sortedList: {}
      });
    }
  }
  render() {
    // console.log(this.props.restaurants);
    let restaurantsList;
    if (!this.props.restaurants) {
      restaurantsList = null;
    } else if (this.state.sortedList.length) {
      restaurantsList = this.state.sortedList;
    } else {
      restaurantsList = this.props.restaurants;
    }
    const restaurants = this.props.restaurants
      ? restaurantsList.map(res => {
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
      <section className="result-area">
        {this.props.restaurants.length ? (
          <section className="filter">
            <button className="price-filter" onClick={this.sortPriceFromLow}>
              price &#8593;
            </button>
            <button className="price-filter" onClick={this.sortPriceFromHigh}>
              price &#8595;
            </button>
            <button className="rating-filter" onClick={this.sortRatingFromHigh}>
              rating
            </button>
          </section>
        ) : null}
        <section className="search-result">
          <ul className="restaurant-list">{restaurants}</ul>
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    location: state.location
  };
}

export default connect(
  mapStateToProps,
  null
)(ResultList);

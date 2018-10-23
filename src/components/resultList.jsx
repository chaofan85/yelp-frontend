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
      sortByRatingFromHigh: false
    };
  }
  sortPriceFromLow = () => {
    if (this.state.sortByPriceFromLow) {
      this.setState({ sortByPriceFromLow: false });
      return;
    }

    this.setState({
      sortByPriceFromLow: true,
      sortByPriceFromHigh: false,
      sortByRatingFromHigh: false
    });
  };

  sortPriceFromHigh = () => {
    if (this.state.sortByPriceFromHigh) {
      this.setState({ sortByPriceFromHigh: false });
      return;
    }

    this.setState({
      sortByPriceFromHigh: true,
      sortByPriceFromLow: false,
      sortByRatingFromHigh: false
    });
  };

  sortRatingFromHigh = () => {
    if (this.state.sortByRatingFromHigh) {
      this.setState({ sortByRatingFromHigh: false });
      return;
    }

    this.setState({
      sortByRatingFromHigh: true,
      sortByPriceFromLow: false,
      sortByPriceFromHigh: false
    });
  };

  getList = () => {
    let price1 = this.state.sortByPriceFromLow;
    let price2 = this.state.sortByPriceFromHigh;
    let rate = this.state.sortByRatingFromHigh;

    if (!price1 && !price2 && !rate) return this.props.restaurants;
    if (price1) {
      let prices = this.props.restaurants.filter(res => res.price);
      return prices.sort((res1, res2) => res1.price.length - res2.price.length);
    }
    if (price2) {
      let prices = this.props.restaurants.filter(res => res.price);
      return prices.sort((res1, res2) => res2.price.length - res1.price.length);
    }
    if (rate) {
      let ratings = this.props.restaurants.filter(res => res.rating);
      return ratings.sort((res1, res2) => res2.rating - res1.rating);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({
        sortByPriceFromHigh: false,
        sortByPriceFromLow: false,
        sortByRatingFromHigh: false,
        location: nextProps.location
      });
    }
  }
  render() {
    let restaurantsList;
    if (!this.props.restaurants) {
      restaurantsList = null;
    } else {
      restaurantsList = this.getList();
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

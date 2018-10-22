import React from "react";
import "./restaurantItem.css";

const RestaurantItem = props => {
  // console.log(props);
  return (
    <li className="item-container">
      <div
        className="restaurant-pic"
        style={{ backgroundImage: `url( ${props.image} )` }}
      />
      <div className="restaurant-info">
        <a href={`${props.url}`} target="_blank" rel="noopener noreferrer">
          <div>{props.name}</div>
        </a>
        <div>{props.rating}</div>
        <div>{props.price}</div>
        <div>{props.phone}</div>
      </div>
    </li>
  );
};

export default RestaurantItem;

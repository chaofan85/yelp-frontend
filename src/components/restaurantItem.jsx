import React from "react";
import "./restaurantItem.css";
// import stars from "/assets/stars.png";

const RestaurantItem = props => {
  const height = -402 + (18 * (5 - props.rating)) / 0.5;
  const categories = props.categories.map(category => {
    return (
      <span className="category" key={category.title}>
        {category.title}
      </span>
    );
  });

  return (
    <li className="item-container">
      <div
        className="restaurant-pic"
        style={{ backgroundImage: `url( ${props.image} )` }}
      />
      <div className="restaurant-info">
        <a href={`${props.url}`} target="_blank" rel="noopener noreferrer">
          <div className="restaurant-name">{props.name}</div>
        </a>
        <div
          className="rating"
          style={{
            background: `url(/stars.png) ${0}px ${height}px`,
            backgroundSize: `${132}px ${560}px`
          }}
        />
        <span className="price">{props.price}</span>
        <span className="categories">{categories}</span>
        <div className="phone">{props.phone}</div>
        <div className="address1">{props.location.display_address[0]}</div>
        <div className="address2">{props.location.display_address[1]}</div>
        <div className="address3">{props.location.display_address[2]}</div>
      </div>
    </li>
  );
};

export default RestaurantItem;

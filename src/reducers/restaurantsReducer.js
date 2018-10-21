import { RECEIVE_BY_LOCATION } from "../actions/searchActions";

const restaurantsReducer = (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_BY_LOCATION:
      return data.businesses;

    default:
      return state;
  }
};

export default restaurantsReducer;

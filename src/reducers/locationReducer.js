import { RECEIVE_LOCATION } from "../actions/searchActions";

const locationReducer = (state = "", { type, location }) => {
  switch (type) {
    case RECEIVE_LOCATION:
      return location;

    default:
      return state;
  }
};

export default locationReducer;

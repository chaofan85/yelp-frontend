import * as SearchApiUtils from "../utils/searchApiUtils";

export const RECEIVE_BY_LOCATION = "RECEIVE_BY_LOCATION";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

const receiveByLocation = data => {
  return {
    type: RECEIVE_BY_LOCATION,
    data
  };
};

const receiveLocation = location => {
  return {
    type: RECEIVE_LOCATION,
    location
  };
};

export const searchByLocation = location => dispatch => {
  return SearchApiUtils.searchByLocation(location).then(payload => {
    dispatch(receiveByLocation(payload));
  });
};

export const currentLocation = location => dispatch => {
  dispatch(receiveLocation(location));
};

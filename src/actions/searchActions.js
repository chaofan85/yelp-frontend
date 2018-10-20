import * as SearchApiUtils from "../utils/searchApiUtils";

export const RECEIVE_BY_LOCATION = "RECEIVE_BY_LOCATION";

const receiveByLocation = data => {
  return {
    type: RECEIVE_BY_LOCATION,
    data
  };
};

export const searchByLocation = location => dispatch => {
  return SearchApiUtils.searchByLocation(location).then(payload =>
    dispatch(receiveByLocation(payload))
  );
};

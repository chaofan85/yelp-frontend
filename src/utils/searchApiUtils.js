import $ from "jquery";

let prefix = "https://enigmatic-depths-85235.herokuapp.com/";
let yelpUrl = "https://api.yelp.com/v3/businesses/search";
let key1 = "qAprBH0u-bIsf-RR_YF6wPToU-Ic-Nc3_";
let key2 = "8mwTtpekVGI9pI8BnUOCjQlRYVTNFJKito";
let key3 = "YUyHArfFqPMhvb6L5Rk-D7LW3Yx";
let key4 = "XFPGnVXq4thwe1N0U2Fk5WrCCXe9jariZ2";

export const searchByLocation = location => {
  return $.ajax({
    url: `${prefix + yelpUrl}`,
    headers: { Authorization: `Bearer ${key1 + key4 + key2 + key3}` },
    dataType: "json",
    data: {
      location,
      term: "restaurant",
      limit: 20
    }
  });
};

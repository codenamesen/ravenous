//Stores the credentials provided by Yelp API
const clientId = 'LiW90h8bxeIj7iY17VL9Zg';
const secret = '19zyEKkRcYjGeO23h72VDVy9hBJFB5UR5kg8n3EaNqN8uYnXnwskxs4hzNNPcNYS';

//Stores the common url required to query Yelp
const urlToYelp = 'https://api.yelp.com/oauth2/token?grant_type=client_credentials';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const urlToYelpBusinessSearch = 'https://api.yelp.com/v3/businesses/search';

//Stores Access Token to autheticate request using client ID and secret
let accessToken;

//Object that stores the functionality needed to interact with Yelp API
const Yelp = {};

//Method used to get access token from Yelp API
Yelp.getAccessToken = function() {
  if (accessToken) {
    return new Promise(resolve => {
      resolve(accessToken)
    });
  }
  return fetch(`${corsAnywhere}${urlToYelp}&client_id=${clientId}&client_secret=${secret}`,
    {method: 'POST'}
  ).then(response => {
    response.json()}
  ).then(jsonResponse => {
    accessToken = jsonResponse.access_token }
  );
};

//Method used to retreive search results from the Yelp API
Yelp.search = function (term, location, sortBy) {
  return Yelp.getAccessToken().then(() => {
    return fetch(`${corsAnywhere}${urlToYelpBusinessSearch}?term${term}&location${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    });
  }).then(response => {
    response.json()}
  ).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business => (
        {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address2,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories,
          rating: business.rating,
          reviewCount: business.review_count
        }
      ));
    }
  });
};

export default Yelp;

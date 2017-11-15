import React from 'react';
/*Links the Business.css to the Business.js*/
import './Business.css';

/*The purpose of the <Business /> component is to represent
how a business (a restaurant) in Ravenous will be formatted and styled*/
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

/*Creates a <Business /> component extended from React,
code copied from (https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/business.txt)*/
class Business extends Reac.Component {
  render() {
    return(
      <div className="Business">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reiewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
import React from 'react';
import CustomNavBar from '../../components/CustomNavBar/CustomNavBar';

import './HomePage.css';

// TODO: Log In button is disabled for now.
const HomePage = () => {
  const navElem = [{"title": "About", "href":"/about"}, {"title": "Log In", "href":"/auth"}, {"title": "Upload", "href":"/upload"} ];
  return (
    <div className="main">
      <CustomNavBar elems={navElem} />
      <div className="body">
        <p>Machine Learning Roulette</p>
      </div>
    </div>
  );
};

export default HomePage;

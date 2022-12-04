import React from 'react';

import './AuthPage.css';

import CustomNavBar from '../../components/CustomNavBar/CustomNavBar';
import Card from '../../components/Card/Card';
import AuthTab from './AuthTab';

const AuthPage = () => {
  const navElem = [{"title": "Home", "href":"/"}, {"title": "Upload", "href":"/upload"} ];
  return (
    <React.Fragment>
      <CustomNavBar elems={navElem} />
      <div className="authentication_container">
        <Card className="authentication">
          <h2>Authentication Page</h2>
          <AuthTab />
        </Card>
      </div>
    </React.Fragment>
  );

};

export default AuthPage;

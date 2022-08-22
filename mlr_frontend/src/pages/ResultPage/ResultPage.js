import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';

import './ResultPage.css';

const ResultPage = () => {
  // TODO: we need to deal with the state data we get from UploadPage
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleHomeBtn() {
    navigate('/');
  }

  function handleExportBtn() {
    // TODO: console here to avoid linting error
    console.log('state data ' + state);
    navigate('/export');
  }

  return (
    <div>
      <div className="result-img-container">
        <img
          className="result-img"
          src="https://mms.businesswire.com/media/20170831005098/en/609373/5/Machine_Learning_Courses_Market.jpg"
        />
      </div>
      <div className="symmetric-button-group">
        <Button
          variant="outline-secondary"
          className="symmetric-button-group-first"
          onClick={handleHomeBtn}>
          Home
        </Button>
        <Button
          variant="outline-secondary"
          className="symmetric-button-group-second"
          onClick={handleExportBtn}>
          Export Result
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;

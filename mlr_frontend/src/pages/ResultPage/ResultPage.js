import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultCellContainer from '../../components/ResultCell/ResultCellContainer';

import './ResultPage.css';

const ResultPage = () => {
  // TODO: we need to deal with the state data we get from UploadPage
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleHomeBtn() {
    navigate('/');
  }

  function handleExportBtn() {
    navigate('/export');
  }

  return (
    <div>
      {Object.keys(state.evaluation).length > 0 &&
        <div className="result-table-container">
          <ResultCellContainer data={state.evaluation} />
        </div>}
      <div className="symmetric-button-group">
        <Button
          variant="outline-secondary"
          className="symmetric-button-group-first"
          onClick={handleHomeBtn}
        >
          Home
        </Button>
        <Button
          variant="outline-secondary"
          className="symmetric-button-group-second"
          onClick={handleExportBtn}
        >
          Export Result
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;

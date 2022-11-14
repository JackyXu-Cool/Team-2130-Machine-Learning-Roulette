import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import JsPDF from 'jspdf';
import ResultCellContainer from '../../components/ResultCell/ResultCellContainer';

import './ResultPage.css';

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleHomeBtn() {
    navigate('/');
  }

  function handleExportBtn() {
    generatePDF();
    navigate('/export');
  }

  function generatePDF() {
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
    });
  }

  return (
    <div>
      {Object.keys(state.evaluation).length > 0 &&
        <div className="result-table-container" id="report">
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

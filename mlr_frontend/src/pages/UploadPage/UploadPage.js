import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import HomeButton from '../../components/HomeButton/HomeButton';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import TextInputContainer from '../../components/TextInputContainer/TextInputContainer';
import ErrorModal from '../../components/Modal/ErrorModal';
import { useHttpClient } from '../../hooks/http-hooks';
import './UploadPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadPage = () => {
  const [dataset, setDataset] = useState(null);
  const [yLabel, setYLabel] = useState(null);
  const [uploadStage, setUploadStage] = useState(1);
  const [selectedModels, setSelectedModels] = useState([]);
  const [parameterValues, setParameterValues] = useState({});
  const { error, sendRequest, errorHandler } = useHttpClient();
  const navigate = useNavigate();
  const formData = new FormData();

  const models = ['KMeans', 'Hierarcical Clustering', 'Naive Bayes', 'Decision Tree'];
  const parameters = ['Number of Clusters', 'Training(%)'];

  function handleDatasetSelected(event) {
    setDataset(event.target.files[0]);
  }

  function handleYLabelSelected(event) {
    setYLabel(event.target.files[0]);
  }

  function handleFileUpload() {
    if (dataset) {
      formData.append("file", dataset);
      formData.append("ylabel", yLabel);
      sendRequest('http://127.0.0.1:5000/upload', 'POST', formData)
        .then((response) => {
          setUploadStage(3);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleNextButton() {
    if (selectedModels.length >= 1) {
      setUploadStage(2);
    }
  }

  function handleStartTraining() {
    // TODO: We need to check that if all the parameters value are defined.
    if (selectedModels.length > 0 && parameterValues !== null) {
      sendRequest(
        'http://127.0.0.1:5000/training',
        'POST',
        JSON.stringify({ models: selectedModels, params: parameterValues }),
        { 'Content-Type': 'application/json' }
      ).then((response) => {
        console.log(response);
        // TODO: Send response to result page
        navigate('/result', { state: {} });
      });
    }
  }

  let uploadStageOneHtml,
    uploadStageTwoHtml,
    uploadStageThreeHtml = [];

  const uploadStageOne = (
    <div className="upload_step_container">
      <div className="upload_step_item">
        <h4>Step 1: Select the ML Model you want to run with</h4>
      </div>
      <CheckboxList
        checked={selectedModels}
        setChecked={setSelectedModels}
        checkList={models}
        title={'Models'}
        disabled={uploadStage == 1 ? false : true}
      />
      <ButtonGroup className="upload_back_next">
        {uploadStage == 1 ?
          <Button variant="outline-secondary" onClick={handleNextButton}>
            Next
          </Button> : null}
      </ButtonGroup>
    </div>
  )

  const uploadStageTwo = (
    <React.Fragment>
      <div className="upload_step_container" style={{ borderBottom: 'none' }}>
        <div className="upload_step_item">
          <h4>Step 2-a: Upload Dataset</h4>
        </div>
        <div className="upload_step_item">
          <input id="uploadedFile" type="file" accept={'.csv'} onChange={handleDatasetSelected} />
        </div>
      </div>
      <div className="upload_step_container">
        <div className="upload_step_item">
          <h4>Step 2-b: Upload Y-Labels for accuracy comparison</h4>
        </div>
        <div className="upload_step_item">
          <input id="uploadedFile" type="file" accept={'.csv'} onChange={handleYLabelSelected} />
          <button className="uploadButton" onClick={handleFileUpload} disabled={uploadStage == 2 ? false : true}>
            Upload
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  const uploadStageThree = (
    <div className="upload_step_container" style={{ border: 'none' }}>
      <div className="upload_step_item">
        <h4>Step3: Input Parameters</h4>
      </div>
      <TextInputContainer
        inputs={parameters}
        parameterValues={parameterValues}
        setParameterValues={setParameterValues}
      />
      <Button
        variant="outline-secondary"
        style={{ height: '70px', width: '180px', position: 'absolute', bottom: 20, right: 20 }}
        onClick={handleStartTraining}
      >
        Start Training
      </Button>
    </div>
  );

  uploadStageOneHtml = [uploadStageOne];
  uploadStageTwoHtml = [uploadStageOne, uploadStageTwo];
  uploadStageThreeHtml = [uploadStageOne, uploadStageTwo, uploadStageThree];

  let html;

  if (uploadStage === 1) {
    html = uploadStageOneHtml;
  } else if (uploadStage === 2) {
    html = uploadStageTwoHtml;
  } else if (uploadStage === 3) {
    html = uploadStageThreeHtml;
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      <HomeButton />
      <div className="main">{html}</div>
    </React.Fragment>
  );
};

export default UploadPage;

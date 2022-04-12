import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import HomeButton from "../../components/HomeButton/HomeButton";
import CheckboxList from "../../components/CheckboxList/CheckboxList";
import TextInputContainer from "../../components/TextInputContainer/TextInputContainer";
import "./UploadPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [uploadStage, setUploadStage] = useState(1);
    const [selectedModels, setSelectedModels] = useState([]);

    const models = ["KMeans", "Principal Component Analysis", "Hierarcical Clustering", "KNN"];
    const parameters = ["Number of Clusters", "Random Seed", "Epochs", "Training(%)"];

    function handleFileSelected(event) {
        setFile(event.target.files[0]);
    }

    function handleFileUpload() {
        if (file) {
            setUploadStage(2);
        }
    }

    function handleBackButton() {
        setFile(null);
        setUploadStage(1);
        document.getElementById("uploadedFile").value = null;
    }

    // TODO: For the future, we need to send it to the server to determine the parameters
    // Parameters are usually dependent on the selected model.
    function handleNextButton() {
        if (selectedModels.length >= 1) {
            setUploadStage(3);
        }
    }

    // TODO: Actually send the request to the server to run ML model
    function handleStartTraining() {
        
    }

    let uploadStageOneHtml, uploadStageTwoHtml, uploadStageThreeHtml = [];

    const uploadStageOne =
        <div className="upload_step_container">
            <div className="upload_step_item">
                <h4>Step1: Upload Dataset</h4>
            </div>
            <div className="upload_step_item">
                <input id="uploadedFile" type="file" onChange={handleFileSelected}/>
                <button className="uploadButton" onClick={handleFileUpload}>Upload</button>
            </div>
        </div>;

    const uploadStageTwoWithBtns =
        <div className="upload_step_container">
            <div className="upload_step_item">
                <h4>Step2: Select Models</h4>
            </div>
            <CheckboxList checked={selectedModels} setChecked={setSelectedModels} checkList={models} title={"Models"}/>
            <ButtonGroup className="upload_back_next">
                <Button variant="outline-secondary" onClick={handleBackButton}>
                    Back
                </Button>
                <Button variant="outline-secondary" onClick={handleNextButton}>
                    Next
                </Button>
            </ButtonGroup>
        </div>;
    
    const uploadStageTwoWithoutBtns = 
        <div className="upload_step_container">
            <div className="upload_step_item">
                <h4>Step2: Select Models</h4>
            </div>
            <CheckboxList checked={selectedModels} setChecked={setSelectedModels} checkList={models} title={"Models"}/>
        </div>;

    const uploadStageThree = 
        <div className="upload_step_container" style={{border: "none"}}>
            <div className="upload_step_item">
                <h4>Step3: Input Parameters</h4>
            </div>
            <TextInputContainer inputs={parameters}/>
            <Button variant="outline-secondary" 
                    style={{height: "100px", width: "180px", position: "absolute", bottom: 10, right: 20}}
                    onClick={handleStartTraining}>
                Start Training
            </Button>
        </div>;

    uploadStageOneHtml = [uploadStageOne];
    uploadStageTwoHtml = [uploadStageOne, uploadStageTwoWithBtns];
    uploadStageThreeHtml = [uploadStageOne, uploadStageTwoWithoutBtns, uploadStageThree];
 
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
            <HomeButton />
            <div className="main">   
                {html}
            </div>
        </React.Fragment>
    );
};

export default UploadPage;
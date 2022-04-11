import React, { useState } from "react";
import HomeButton from "../../components/HomeButton/HomeButton";
import CheckboxList from "../../components/CheckboxList/CheckboxList";
import "./UploadPage.css";

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [uploadStage, setUploadStage] = useState(1);
    const [selectedModels, setSelectedModels] = useState([]);

    function handleFileSelected(event) {
        setFile(event.target.files[0]);
    }

    function handleFileUpload(event) {
        if (file) {
            setUploadStage(2);
        }
    }

    let uploadStageOneHtml, uploadStageTwoHtml, uploadStageThreeHtml = [];

    const uploadStageOne =
        <div className="upload_step_container">
            <div className="upload_step_item">
                <h4>Step1: Upload Dataset</h4>
            </div>
            <div className="upload_step_item">
                <input type="file" onChange={handleFileSelected}/>
                <button className="uploadButton" type="submit" onClick={handleFileUpload}>Upload</button>
            </div>
        </div>;

    const uploadStageTwo =
        <div className="upload_step_container">
            <div className="upload_step_item">
                <h4>Step2: Select Models</h4>
            </div>
            <CheckboxList checked={selectedModels} setChecked={setSelectedModels}/>
        </div>;

    const uploadStageThree = 
        <div className="upload_step_container" style={{border: "none"}}>
            <div className="upload_step_item">
                <h4>Step3: Input Parameters</h4>
            </div>
        </div>;

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
            <HomeButton />
            <div className="main">   
                {html}
            </div>
        </React.Fragment>
    );
};

export default UploadPage;
import React, { useState } from "react";
import HomeButton from "../../components/HomeButton/HomeButton";
import Uploady, { useItemStartListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

import "./UploadPage.css";

const MyUploadButton = (props) => {
    useItemStartListener((item) => {
        console.log(`item ${item.file.name} started uploading`);
        props.onSelect(item.file.name);
    });

    return (
        <UploadButton className="uploadButton"> Upload Files </UploadButton>
    );
};

const UploadPage = () => {
    const [uploadedFileName, setUploadedFileName] = useState(null);

    return (
        <Uploady destination={{ url: "" }}>
            <div className="main">
                <HomeButton />
                <div className="upload_first">
                    <div className="upload_first_item">
                        <h4>Step1: Upload</h4>
                    </div>
                    <div className="upload_first_item">
                        <p>File selected: {uploadedFileName}</p> 
                        <MyUploadButton onSelect={setUploadedFileName}/>
                    </div>
                </div>
            </div>
        </Uploady>
    );
};

export default UploadPage;
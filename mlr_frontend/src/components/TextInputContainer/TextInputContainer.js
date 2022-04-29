import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import "./TextInputContainer.css";

const TextInputContainer = (props) => {
    return (
        <InputGroup className="mb-3 inputs_container">
            {props.inputs.map((inputName, index) => (
                <React.Fragment>
                    <div key={index} className="textInput">
                        <InputGroup.Text style={{ marginBottom: "5pt" }}>{inputName}</InputGroup.Text>
                        <FormControl
                            aria-label={generateIdFromString(inputName)}
                        />
                    </div>
                </React.Fragment>
            ))}
        </InputGroup>
    )
};

// Replace the space with underline
function generateIdFromString(str) {
    return str.replaceAll(" ", "_");
}

export default TextInputContainer;
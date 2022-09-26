import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './TextInputContainer.css';

const TextInputContainer = (props) => {
  let parameterValues = props.parameterValues;

  const handleChangeInput = (event) => {
    let temp = { ...parameterValues };
    let parameterName = event.target.ariaLabel;
    temp[parameterName] = event.target.value;
    props.setParameterValues(temp);
  };

  return (
    <InputGroup className="mb-3 inputs_container">
      {props.inputs.map((inputName, index) => (
        <React.Fragment key={index}>
          <div key={index} className="textInput">
            <InputGroup.Text style={{ marginBottom: '5pt' }}>{inputName}</InputGroup.Text>
            <FormControl
              aria-label={generateIdFromString(inputName)}
              onChange={handleChangeInput}
            />
          </div>
        </React.Fragment>
      ))}
    </InputGroup>
  );
};

// Replace the space with underline
function generateIdFromString(str) {
  return str.replaceAll(' ', '_');
}

export default TextInputContainer;

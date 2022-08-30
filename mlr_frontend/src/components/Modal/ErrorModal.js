import React from 'react';
import Modal from './Modal';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ExportPage.css';

const ExportPage = () => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  function changeEmailInput(event) {
    setEmail(event.target.value);
  }

  // TODO: use third party library such as SendGrid to send email to user
  function handleSendEmail() {
    console.log('email is ' + email);
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  }

  return (
    <div className="export-main">
      <div className="export-element">
        <Form.Label style={{ fontWeight: '600', fontSize: '16pt' }}>Send to Email</Form.Label>
        <Form.Control
          type="email"
          name="userEmail"
          placeholder="name@example.com"
          onChange={changeEmailInput}
        />
        <Button
          variant="outline-secondary"
          style={{ width: '250px', height: '45px', marginLeft: '10px' }}
          onClick={handleSendEmail}>
          Send
        </Button>
      </div>
      <div className="export-element">
        <label style={{ fontWeight: '600', fontSize: '16pt' }}> Create Link </label>
        <Button
          variant="outline-secondary"
          style={{ width: '100px', height: '35px', marginLeft: '20px' }}
          onClick={handleCopyToClipboard}>
          Create
        </Button>
        {copied ? (
          <label className="export-link-copied-text">
            Link successfully created and copied to clipboard
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default ExportPage;

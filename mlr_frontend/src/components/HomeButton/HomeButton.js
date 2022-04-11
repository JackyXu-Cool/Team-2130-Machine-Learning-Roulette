import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeButton.css';

const HomeButton = () => {
   return (
       <Link to="/">
        <Button variant="outline-secondary" className="btn-lg">
            Home
        </Button>
       </Link>
   );
};

export default HomeButton;
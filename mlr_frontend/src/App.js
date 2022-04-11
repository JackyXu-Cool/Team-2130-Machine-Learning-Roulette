import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UploadPage from './pages/UploadPage/UploadPage';
import ExportPage from './pages/ExportPage/ExportPage';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
          <Routes>
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/export" element={<ExportPage />} />
          </Routes>
      </React.Fragment>
    </BrowserRouter>
  )
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UploadPage from './pages/UploadPage/UploadPage';
import ExportPage from './pages/ExportPage/ExportPage';
import HomePage from './pages/HomePage/HomePage';
import ResultPage from './pages/ResultPage/ResultPage';
import AuthPage from './pages/AuthPage/AuthPage';
import AboutPage from './pages/AboutPage/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/upload" element={<UploadPage />} exact />
          <Route path="/export" element={<ExportPage />} exact />
          <Route path="/result" element={<ResultPage />} exact />
          <Route path="/auth" element={<AuthPage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from "./Router";
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
          <Router />
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);

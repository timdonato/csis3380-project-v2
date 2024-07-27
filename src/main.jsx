import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

//CSS
import './index.css';
import './assets/css/all.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-icons.css';
import './assets/css/boxicons.min.css';
import './assets/css/jquery-ui.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/odometer.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/style.css';

import 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
import './assets/js/jquery-ui.js';
import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/wow.min.js';
import './assets/js/swiper-bundle.min.js';
import './assets/js/slick.js';
import './assets/js/jquery.nice-select.js';
import './assets/js/odometer.min.js';
import './assets/js/viewport.jquery.js';
import './assets/js/jquery.magnific-popup.min.js';
import './assets/js/main.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

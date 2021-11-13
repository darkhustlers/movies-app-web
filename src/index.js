import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocalStateProvider } from './contexts/local';

import './styles/tailwind.css';
import './styles/global.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

ReactDOM.render(
  <React.StrictMode>
    <LocalStateProvider>
      <App />
    </LocalStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

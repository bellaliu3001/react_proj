import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './static/globalstyle.js';
import IconFontStyle from './static/iconfont/iconfont';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
    <IconFontStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'tachyons';
// import 'bootstrap/dist/css/bootstrap.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

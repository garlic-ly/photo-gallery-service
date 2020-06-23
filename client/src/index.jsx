import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

// When combining all 4 services, index.jsx will recieve Id and pass it App
const id = 10;

ReactDOM.render(<App selectedRoom={id}/>, document.getElementById('app'));
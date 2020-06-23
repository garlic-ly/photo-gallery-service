import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

// When combining all 4 services, index.jsx will recieve Id to render and pass it App
// here using had coded id
const id = 25;

ReactDOM.render(<App selectedRoom={id}/>, document.getElementById('app'));
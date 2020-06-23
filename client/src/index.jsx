import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

// index.jsx will recieve id as props once all 4 services are connected
const id=25;

ReactDOM.render(<App selectedRoom={id}/>, document.getElementById('app'));
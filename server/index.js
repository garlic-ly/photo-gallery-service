const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;
const controllers = require('./controllers.js');

app.use('/rooms/:id', express.static(path.join(__dirname, '../public/')));

app.listen(port, () => console.log(`The app listening at http://localhost:${port}`));

app.use(bodyParser.json());

app.get('/api/photos/:id', (req, res) => {
  controllers.get(req, res);
});

app.patch('/api/photos/:id', (req, res) => {
  controllers.patch(req, res);
});

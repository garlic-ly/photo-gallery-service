const express = require('express');
const path = require('path');

const app = express();
const port = 3002;
const controllers = require('./controllers.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`The app listening at http://localhost:${port}`));

app.get('/api/rooms/:id', (req, res) => {
  controllers.get(req, res);
});

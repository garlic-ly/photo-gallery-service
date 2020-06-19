const express = require('express');

const app = express();
const port = 3002;
const controllers = require('./controllers.js');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get('/api/rooms/:id', (req, res) => {
  controllers.get(req, res);
});

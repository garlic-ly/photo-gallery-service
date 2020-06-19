const models = require('./models.js')

module.exports = {
  get: (req, res) => {
    let { id } = req.body;

    models.get(id, (err, result) => {

    });
  },
};

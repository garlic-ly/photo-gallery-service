const models = require('./models.js');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;

    models.get(id, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },

  patch: (req, res) => {
    const { id } = req.params;
    const { isFavorite } = req.body;
    models.patch(id, isFavorite, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
};

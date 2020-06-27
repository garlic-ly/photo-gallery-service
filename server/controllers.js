const models = require('./models.js');

module.exports = {
  get: (req, res) => {
    const {id}= req.params;

    models.get(id, (err, result) => {
      if (err) {
        res.status(400);
        res.send(err);
      } else {
        res.status(200);
        res.send(result);
      }
    });
  },

  patch: (req, res) => {
    const {id}= req.params;
    const {is_favorite}=req.body;
    models.patch(id, is_favorite, (err, result) => {
      if (err) {
        res.status(400);
        res.send(err);
      } else {
      res.status(200);
      res.send(result);
      }
    });
  }
};

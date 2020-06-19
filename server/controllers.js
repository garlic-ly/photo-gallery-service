const models = require('./models.js')

module.exports = {
  get: (req, res) => {
    let id = req.body.id;

    models.get ( id, () => {

    })
  }
}
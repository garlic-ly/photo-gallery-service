const db = require('../database/index.js');

module.exports = {
  get: (id, callback) => {
    const q = 'SELECT * FROM rooms INNER JOIN images ON rooms.id = ? AND rooms.id = images.room_id';
    db.query(q, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
};


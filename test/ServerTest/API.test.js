const request = require('supertest')('http://localhost:3002');

describe ('A suite for server request', () => {
  it('should fetch a existing room data with a given "id"', () => {
    const targetId = 10;
    request.get(`api/rooms/${targetId}`)
      .then( response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  });


  it('should throw an error and respond with 400 with unknown id GET request', () => {
    const targetId = 10000;
    request.get(`api/rooms/${targetId}`)
      .then( response => {
        expect(response.statusCode).toBe(400);
        done();
    })
  });
})

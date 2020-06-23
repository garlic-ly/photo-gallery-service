const request = require('supertest')('http://localhost:3002');

xdescribe ('A suite for server request', () => {
  it('should fetch a existing room data and respond with 200 with a given "id"', () => {
    const targetId = 10;
    request.get(`api/rooms/${targetId}`)
      .then( response => {
        expect(response.statusCode).toBe(200);
        expect(response.body[i].room_id).toBe(targetId);
        done();
      });
  });


  it('should throw an error and respond with 400 to GET request with unknown id', () => {
    const targetId = 10000;
    request.get(`api/rooms/${targetId}`)
      .then( response => {
        expect(response.statusCode).toBe(400);
        done();
    });
  });
})

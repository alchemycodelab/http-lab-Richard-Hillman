const request = require('supertest');
const server = require('../lib/app');

describe('app routes', () => {
  it.only('responds', async() => {
    const response = await request(server)
      .get('/blue');
        
    expect(response.body).toEqual({
      name: 'hello'
    });
  });
});

const request = require('supertest');
const server = require('../lib/app');

describe('app routes', () => {
  
  
  it.skip('responds', async() => {
    const res = await request(server)
      .get('/');
 
    expect(res.body).toequal('name: hello');
  
  });

  // ------------------------------------------

  it.skip('returns red', async() => {
    const res = await request(server)
      .get('/redrum');

    expect(res.body).toEqual(
      '<html><body><h1>REDRUM</h1></body></html>'
    );
  });

  // ------------------------------------------

  it.skip('returns green', async() => {
    const res = await request(server)
      .get('/greenyum');

    expect(res.body).toEqual(
      '<html><body><h1>GREEN BEANS</h1></body></html>'
    );
  });

  // ------------------------------------------

  it.skip('returns blue', async() => {
    const res = await request(server)
      .get('/bluegoo');

    expect(res.body).toEqual(
      '<html><body><h1>OCEAN SPRAY</h1></body></html>'
    );
  });

  // ------------------------------------------


});

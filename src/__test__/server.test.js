'use strict';

const superagent = require('superagent');
const server = require('../lib/server');

describe('Testing Red Panda Routes', () => {
  beforeAll(server.start);
  test('should respond with 200 and a newly born Red Panda, SAVE THE RED PANDAS!!!!', () => {
    return superagent.post('http://localhost:3000/api/redPandas')
      .send({ name: 'Ailurus fulgens', description: 'Cutest wittoh animal' })
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Ailurus fulgens');
        expect(response.body.description).toEqual('Cutest wittoh animal');
        expect(response.body.id).toBeTruthy();
        expect(response.body.timestamp).toBeTruthy();
      });
  });
  test('should respond with 400 status code if a Red Panda has improper ID', () => {
    return superagent.get('http://localhost:3000/api/redPanda?id=5')
      .set('Content-Type', 'application/json')
      .send({ description: 'Cutest wittoh animal' })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(400);
      });
  });
  test('should respond with 400 status code if the Red Panda does not have a name', () => {
    return superagent.post('http://localhost:3000/api/redPandas')
      .set('Content-Type', 'application/json')
      .send({ description: 'Cutest wittoh animal' })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(400);
      });
  });
  // test('should respond with 200 staus code along with an updated Red Panda', () => {
  //   return superagent.put('http://localhost:3000/api/redPandas')
  //     .set('Content-Type', 'application/json')
  //     .send({ name: 'Cute wittoh guy', description: 'Cutest animal ever!' })
  //     .then((response) => {
  //       expect(response.status).toEqual(200);
  //       expect(response.body.name).toEqual('Cute wittoh guy');
  //       expect(response.body.description).toEqual('Cutest animal ever!');
  //     });
  // });
  test('should respond with 400 status code for a bad request', () => {
    return superagent.get('http://localhost:3000/api/redPandas')
      .set('Content-Type', 'application/json')
      .send({ notGonnaWork: 'Cutest wittoh animal' })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(400);
      });
  });
});

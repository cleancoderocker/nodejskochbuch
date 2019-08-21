const request = require('supertest');

const app = require('../src/start');

describe('Contact API', () => {
  describe('GET /api/v1/contacts', () => {
    it('should respond with JSON', (done) => {
      request(app)
        .get('/api/v1/contacts')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) => {
          if (error) {
            throw error;
          }
          done();
        });
    });
    it('should get a list of all contacts', (done) => {
      request(app)
        .get('/api/v1/contacts')
        .expect((response) => {
          expect(response.body.length).toBe(2);
        })
        .expect(200, done);
    });
  });
  describe('POST /api/v1/contacts', () => {
    it('should ncrease the number of all contacts', async (done) => {
      const testApp = request(app);
      const response = await testApp.get('/api/v1/contacts');
      expect(response.body.length).toBe(2);
      await testApp.post('/api/v1/contacts').send({
        id: '3',
        firstName: 'Peter',
        lastName: 'Mustermann'
      });
      const response2 = await testApp.get('/api/v1/contacts');
	  expect(response2.body.length).toBe(3);
	  done();
    });
  });
});

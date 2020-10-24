const app = require('../src/app');
const supertest = require('supertest');

// req.app.get is returning as undefined when ran through the test
// currently only the POST requests are working

describe('wish', () => {
	it(' GET /wish', () => {
		return supertest(app).get('/wish').expect(200);
	});
	it(' POST /wish', () => {
		it('responds with json', function (done) {
			supertest(app)
				.post('/wish')
				.send({
					title: 'test',
					author: 'test',
					genere: 'Fiction',
					lent: false,
					completed: false,
				})
				.expect(200);
		});
	});
	it(' GET /wish/:id', () => {
		return supertest(app).get('/wish/1').expect(200);
	});
	it(' DELETE /wish/:id', () => {
		return supertest(app).del('/wish/1').expect(200);
	});
});

supertest(app).get('/library').expect(200);

describe('library', () => {
	it(' GET /library', () => {
		return supertest(app).get('/library').expect(200);
	});
	it(' POST /library', () => {
		it('responds with json', function (done) {
			request(app)
				.post('/library')
				.send({ title: 'test', author: 'test', genere: 'Fiction' })
				.expect(200);
		});
	});
	it(' GET /library/:id', () => {
		return supertest(app).get('/library/6').expect(200);
	});
	it(' PATCH /library', () => {
		return supertest(app).get('/library').expect(200);
	});
});

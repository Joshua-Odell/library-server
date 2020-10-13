const app = require('../src/app');
const supertest = require('supertest');

describe('wish', () => {
	it(' GET /wish', () => {
		return supertest(app).get('/wish').expect(200);
	});
	it(' POST /wish', () => {
		it('responds with json', function (done) {
			request(app)
				.post('/wish')
				.send({
					title: 'test',
					author: 'test',
					genere: 'Fiction',
					lent: false,
					completed: false,
				})
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		});
	});
	it(' GET /wish/:id', () => {
		return supertest(app).get('/wish/1').expect(200);
	});
	it(' DELETE /wish/:id', () => {
		return supertest(app).del('/wish/1').end(fn);
	});
});

describe('library', () => {
	it(' GET /library', () => {
		return supertest(app).get('/library').expect(200);
	});
	it(' POST /library', () => {
		it('responds with json', function (done) {
			request(app)
				.post('/library')
				.send({ title: 'test', author: 'test', genere: 'Fiction' })
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		});
	});
	it(' GET /library/:id', () => {
		return supertest(app).get('/library/6').expect(200);
	});
	it(' PATCH /library', () => {
		return supertest(app).get('/library').expect(200);
	});
	it(' GET /library', () => {
		return supertest(app).get('/library').expect(200);
	});
});

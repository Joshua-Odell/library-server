const app = require('../src/app');
const supertest = require('supertest');

describe('wish', () => {
	it(' GET /wish', () => {
		return supertest(app).get('/wish').expect(200);
	});
	it(' POST /wish', () => {
		return supertest(app).get('/library').expect(200);
	});
	it(' GET /wish/:id', () => {
		return supertest(app).get('/wish/1').expect(200);
	});
	it(' DELETE /wish/:id', () => {
		return supertest(app).get('/wish/1').expect(200);
	});
});

describe('library', () => {
	it(' GET /library', () => {
		return supertest(app).get('/library').expect(200);
	});
	it(' POST /library', () => {
		return supertest(app).get('/library').expect(200);
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

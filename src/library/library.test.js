const supertest = require('supertest');
const app = require('../app');

describe('library', () => {
	it(' GET /library', () => {
		return supertest(app).get('/library').expect(200);
	});
	it(' POST /library', () => {
		//
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

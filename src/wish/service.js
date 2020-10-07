const WishService = {
	addBook(knex, newBook) {
		return knex
			.insert(newBook)
			.into('wish')
			.returning('*')
			.then((rows) => {
				return rows[0];
			});
	},
	getAllBooks(knex) {
		return knex.select('title', 'author', 'id').from('wish');
	},
	getBookById(knex, id) {
		return knex.select('*').from('wish').where('id', id);
	},
	deleteBook(knex, id) {
		return knex.from('wish').where('id', id).del();
	},
};
module.exports = WishService;

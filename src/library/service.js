const LibraryService = {
	addBook(knex, newBook) {
		return knex
			.insert(newBook)
			.into('library')
			.returning('*')
			.then((rows) => {
				return rows[0];
			});
	},
	getAllBooks(knex) {
		return knex
			.select('title', 'author', 'id')
			.from('library')
			.where('user', user);
	},
	getBookById(knex, id) {
		return knex.select('*').from('library').where('id', id).where({ user });
	},
	updateBook(knex, id, updatedBook) {
		return knex('library').where({ id }).where({ user }).update(updatedBook);
	},
	deleteBook(knex, id) {
		return knex.from('library').where('id', id).where({ user }).del();
	},
};
module.exports = LibraryService;

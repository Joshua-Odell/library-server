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
		return knex.select('title', 'author', 'id').from('library');
	},
	getBookById(knex, id) {
		return knex.select('*').from('library').where('id', id);
	},
	updateBook(knex, id, updatedBook) {
		return knex('library').where({ id }).update(updatedBook);
	},
	deleteBook(knex, id) {
		//
	},
};
module.exports = LibraryService;

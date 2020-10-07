require('dotenv').config;
const express = require('express');
const { NODE_ENV } = require('../config');
const LibraryService = require('./service');
const app = express();

const libraryRouter = express.Router();
const bodyParser = express.json();

libraryRouter
	.route('/library')
	.get((req, res, next) => {
		const knexInstance = req.app.get('db');
		// this check is an uncessary placeholder for some data validation
		if (!req) {
			return res.status(400);
		}
		LibraryService.getAllBooks(knexInstance)
			.then((books) => {
				res.status(200).json(books);
			})
			.catch(next);
	})
	.post((req, res, next) => {
		const knexInstance = req.app.get('db');
		const { title, author, genere, lent, completed } = req.body;
		const newBook = { title, author, genere, lent, completed };
		LibraryService.addBook(knexInstance, newBook)
			.then((book) => {
				res.status(200).json(book);
			})
			.catch(next);
	});

libraryRouter
	.route('/library/:id')
	.get((req, res, next) => {
		const knexInstance = req.app.get('db');
		LibraryService.getBookById(knexInstance, req.params.id)
			.then((book) => {
				res.status(200).json(book);
			})
			.catch(next);
	})
	.patch((req, res, next) => {
		const knexInstance = req.app.get('db');
		const { lent, completed } = req.body;
		const updatedBook = { lent, completed };
		LibraryService.updateBook(knexInstance, req.params.id, updatedBook)
			.then(() => {
				return res.status(200);
			})
			.catch(next);
	})
	.delete((req, res, next) => {
		const knexInstance = req.app.get('db');
		LibraryService.deleteBook(knexInstance, req.params.id)
			.then(() => {
				return res.status(200);
			})
			.catch(next);
	});

module.exports = libraryRouter;

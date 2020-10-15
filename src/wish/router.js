require('dotenv').config;
const express = require('express');
const { NODE_ENV } = require('../config');
const WishService = require('./service');
const app = express();

const wishRouter = express.Router();
const bodyParser = express.json();

wishRouter
	.route('/wish/:user')
	.get((req, res, next) => {
		const knexInstance = req.app.get('db');
		// this check is an uncessary placeholder for some data validation
		if (!req) {
			return res.status(400);
		}
		WishService.getAllBooks(knexInstance)
			.then((books) => {
				res.status(200).json(books);
			})
			.catch(next);
	})
	.post((req, res, next) => {
		const knexInstance = req.app.get('db');
		const { title, author, genere } = req.body;
		const newBook = { title, author, genere };
		WishService.addBook(knexInstance, newBook)
			.then((book) => {
				res.status(200).json(book);
			})
			.catch(next);
	});

wishRouter
	.route('/wish/:user/:id')
	.get((req, res, next) => {
		const knexInstance = req.app.get('db');
		WishService.getBookById(knexInstance, req.params.id)
			.then((book) => {
				res.status(200).json(book);
			})
			.catch(next);
	})
	.delete((req, res, next) => {
		const knexInstance = req.app.get('db');
		WishService.deleteBook(knexInstance, req.params.id)
			.then(() => {
				return res.status(200);
			})
			.catch(next);
	});

module.exports = wishRouter;

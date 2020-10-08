require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const libraryRouter = require('./library/router');
const wishRouter = require('./wish/router');

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: 'https://library-client.vercel.app/' }));
app.use(libraryRouter);
app.use(wishRouter);

app.use(function errorHandler(error, req, res, next) {
	let response;
	if (NODE_ENV === 'production') {
		response = { error: { message: 'server error' } };
	} else {
		console.error(error);
		response = { message: error.message, error };
	}
	res.status(500).json(response);
});

module.exports = app;

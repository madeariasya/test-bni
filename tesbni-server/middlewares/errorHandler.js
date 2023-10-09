'use strict';

const  HttpError = require('../helpers/error.js')

const errorHandle = async (err, req, res, _next) => {
	console.log(err.name);
    
	if (err instanceof HttpError) {
        return res.status(err.code).json(err);
	}
    
	let statusCode = 500;
	let message = 'Internal server error';
    
    if(err.name === 'SequelizeUniqueConstraintError'){
        statusCode = 400
        message = 'Nomor Handphone sudah terdaftar!'
    }

	res.status(statusCode).json({
		message,
	});
};

module.exports = errorHandle
var url = require('url');
var File = require('models/file').File;
var HttpError = require('error').HttpError;
var async = require('async');


exports.get = function(req, res, next) {

	var urlParse = url.parse(req.url, true);

	if (!urlParse.query.filename){
		urlParse.query.filename= 'test';
	}

	File.findOne({filename : urlParse.query.filename }).then(function (file) {
		console.log(file);
		res.render('pad', {
			fileName: file.filename,
			text: file.text,
			UserCreate: file.UserCreate
		});
	}).catch(function (err) {
		console.error(err);
		next( new  HttpError(404, "Document not found"));
	});
};
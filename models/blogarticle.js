

var crypto = require('crypto');
var async = require('async');
var util = require('util');

var mongoose = require('lib/mongoose'),
	Schema = mongoose.Schema;


var schema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true
	},
	text:{
		type: String,
		default: "Hello",
		required: true
	},
	userCreate:{
		type: String,
		required: true
	},
	likes:{
		type: Number,
		default: 0
	},
	reposts:{
		type: Number,
		default: 0
	},
	created: {
		type: Date,
		default: Date.now
	}

});

schema.method.getNumberLikes = function(){
	return this.likes;
};
schema.method.getNumberReports = function(){
	return this.reports;
};

exports.BlogArticle = mongoose.model('BlogArticle', schema);
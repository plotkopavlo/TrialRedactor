var url = require('url');
var BlogArticle = require('models/blogarticle').BlogArticle;
var HttpError = require('error').HttpError;


exports.get = function(req, res, next) {

	var urlParse = url.parse(req.url, true);
	var articleID = req.params['articleID'];
	console.log(articleID);


	BlogArticle.findOne({ _id : articleID }).then(function (article) {
		console.log(article);
		res.render('blogArticle', {
			title: article.title,
			text: article.text,
			userCreate: article.userCreate,
			likes: article.likes,
			reposts: article.reposts,
			date: article.created
		});
	}).catch(function (err) {
		next( new  HttpError(404, "Document not found"));
	});
};


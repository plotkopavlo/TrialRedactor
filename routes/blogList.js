var BlogArticle = require('models/blogarticle').BlogArticle;

exports.get = function(req, res) {
	res.render('blogList');
	console.log("id: "+req.session.user);
};

exports.getData = function(req, res) {
	console.log('getData');
	var sendFile;
	BlogArticle.find()
		.then(function (blogArticles) {
			var sendFiles =  blogArticles.map(function (blogArticle, i, blogArticles) {
				var text = blogArticle.text.substring(0, 100) ;
				sendFile =  {
					'id': blogArticle._id,
					'title': blogArticle.title,
					'text': text,
					'userCreate': blogArticle.userCreate,
					'likes': blogArticle.likes,
					'reposts': blogArticle.reposts,
					'created': blogArticle.created
				};
				return sendFile;
			});
			return JSON.stringify(sendFiles);
		})
		.then(function (sendFiles) {
			res.send(sendFiles);
		})
		.catch(function (err) {
			console.error(err);
		});
};
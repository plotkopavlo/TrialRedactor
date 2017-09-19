var BlogArticle = require('models/blogarticle').BlogArticle;

module.exports = function (io) {
	io
		.of('bloglist')
		.on('connection', function(socket, all) {

			socket.on('sendData', function (cb) {
				console.log('sendData');
				var sendFile;
				BlogArticle.find().then(function (blogArticles) {
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
					cb(sendFiles);
				})
					.catch(function (err) {
						console.error(err);
					});
			});

		});
};
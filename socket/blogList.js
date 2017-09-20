var BlogArticle = require('models/blogarticle').BlogArticle;

module.exports = function (io) {
	io
		.of('bloglist')
		.on('connection', function(socket, all) {

			socket.on('sendData', function (cb) {
				console.log('sendData');

			});

		});
};
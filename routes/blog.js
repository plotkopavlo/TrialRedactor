
module.exports = function(app) {
	app.get('/blog', require('./blogList').get);
	app.get('/blog/data.json', require('./blogList').getData);
	app.get('/blog/post/:ArticleID', require('./blogAricle'.get))
};
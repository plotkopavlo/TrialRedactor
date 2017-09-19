exports.get = function(req, res) {
	res.render('blogList');
	console.log("id: "+req.session.user);
};
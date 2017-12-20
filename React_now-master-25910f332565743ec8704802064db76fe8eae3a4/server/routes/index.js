var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var loginctrl=require('../controller/login');
var moviectrl=require('../controller/movie');
/* GET home page. */

router.post('/', function(req, res, next) {
 res.render('index', { title: req.body.moviename });
});
/* GET home page. */
//loginpage
module.exports = function(passport)
{
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/movie.html',
		failureRedirect: '/',
		failureFlash : true
	}));
	
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/index.html',
		failureRedirect: '/',
		failureFlash : true
	}));
//router.get('/logout',logoutctrl.logout);
router.post('/movie/addMovie', moviectrl.addMovie);
router.get('/movie/viewMovie', moviectrl.viewMovie);
router.post('/movie/deleteMovie', moviectrl.deleteMovie);
router.get('/movie/search/:name',moviectrl.searchMovie);
return router;
}
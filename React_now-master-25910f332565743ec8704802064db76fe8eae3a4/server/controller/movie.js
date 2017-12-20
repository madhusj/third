var request = require('request');
var User = require('../schema/movieschema');
var movieController = {
    addMovie: function(req, res, next) {
        var details = {
            title: req.body.title,
            poster: req.body.poster,
            date: req.body.date
        };
        var db = new User(details);
        db.save(function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },

    viewMovie: function(req, res) {
        User.find(function(err, data) {
            if (err) {
                console.log("error");
            } else {
                console.log(data);
                res.send(data);
            }
        });
    },

    deleteMovie: function(req, res, next) {
        User.findOneAndRemove({ 'title': req.body.title }, function(err, data) {
            if (err) {
                console.log("error");
            } else {
                res.send("removed success");
            }
        });
    },
    searchMovie: function(req, res) {
        console.log(req.query.moviename);
        request.get('https://api.themoviedb.org/3/search/movie?api_key=945f977f3fc53bcc0f8a9f131a5e7246&language=en-US&query=' + req.params.name + '&page=1&include_adult=false', function(err, response, body) {
            if (!err && response.statusCode == 200) {
                res.json(response.body);
            } else {
                res.send('error occured');
            }
        });
    }
};
module.exports = movieController;

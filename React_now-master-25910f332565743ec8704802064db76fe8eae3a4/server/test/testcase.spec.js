var should = require("chai").should(),
supertest = require("supertest"),
expect = require("chai").expect,
app = require("../../server/index");
var movie = require('../schema/favouriteschema');
var user = require('../schema/signupschema');
var loginctrl=require('../controller/login');
var moviectrl=require('../controller/movie');
var mongoose = require('mongoose');
var sinon = require("sinon");
var findmovie = sinon.stub(movie,'find');
var username = sinon.stub(user,'find');
var url = supertest("http://localhost:3000");
describe("Testing the data from mongoDB", function(err){
   beforeEach(function(){
        findmovie.yields(null,[{'title':'Singam'}]);
        username.withArgs({email:'jayanthi@wipro.com'}).returns({firstname:'jayanthi'});
    })

     it("Retrieves data and checks moviename", function(done){

        url
       .get("/movie/viewMovie")
       .expect(200)
       .end(function(err,res){
        if (err) {
            throw err;
        }
       expect(res.body[0].title).to.be.equal('Singam');
       done();
       });  
    });

    it("Retrieves data and checks firstname", function(done){

      url
      .post("/signup")
      .expect(200)
      .end(function(err,res){
      if (err) {
        throw err;
      }
      expect(username({email:'jayanthi@wipro.com'}).firstname).to.be.equal('jayanthi');
      done();
     });  
  });

})
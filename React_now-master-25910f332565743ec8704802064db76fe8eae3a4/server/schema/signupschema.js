var  mongoose=require("mongoose")
var schema = mongoose.Schema({
   email: { type: String, unique: true },
   firstname:String,
   password:String,
   Conform_Password:String
   
});
var datalist = mongoose.model("signup",schema);
module.exports =datalist;
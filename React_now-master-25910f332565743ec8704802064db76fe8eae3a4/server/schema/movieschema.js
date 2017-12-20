var  mongoose=require("mongoose")
var schema = mongoose.Schema({
   title: { type: String, unique: true },
   poster:String,
   date:String
});



var datalist = mongoose.model("Movielist",schema);

module.exports =datalist;
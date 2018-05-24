var express = require("express")
var apiRouter = express.Router()
var path = require("path")
var fs = require("fs");


apiRouter.post("/friends",function(req,res){
  console.log("hi",req.body)
  var friends = {
    "users":[{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]}]
  }
  var differences = []
  for (var i = 0; i < friends.users.length; i++){
    var scores = friends.users[i].scores
    var totalDifference = 0
  for (var i=0; i < scores; i++){
    totalDifference += scores[i] - req.body["scores[]"][i]
    

  }
  differences.push(totalDifference)
  }
  var indexOfSmallestDifference = differences.indexOf(Math.min(...differences));
  var bestMatch = friends.users[indexOfSmallestDifference];
  console.log(bestMatch)
//   fs.readFile("C:\\Users\\shri_\\berkeley-bootcamp\\friendfinder\\app\\data\\friends.json","utf8", function(error,data){
//     if (error) {
//       return console.log(error);
//     }
  
//     console.log(typeof data)
//     data = JSON.parse(JSON.stringify(data))
//     for(var i = 0; i < data["users"].length; i++){
//       console.log(data["users"].name)
//     }
//   })
res.json({name:bestMatch.name,picture:bestMatch.photo})
})


module.exports = apiRouter

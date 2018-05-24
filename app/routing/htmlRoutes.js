var express = require("express")
var htmlRouter = express.Router()
var path = require("path")

htmlRouter.get("/survey",function(req,res){
  res.sendFile(path.join(__dirname, '../public', 'survey.html'))

})

htmlRouter.get("*",function(req,res){
res.sendFile(path.join(__dirname, '../public', 'home.html'))

})


module.exports = htmlRouter

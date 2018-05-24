var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var app = express()
var htmlRoutes = require("./app/routing/htmlRoutes.js")

var apiRoutes = require("./app/routing/apiRoutes.js")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api",apiRoutes)
app.use("/",htmlRoutes) 
app.use(express.static("./app/public"))
app.listen(process.env.PORT || 3000,function(){
  console.log("app.listen on port 3000")


})

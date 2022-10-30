const express = require("express");
const http = require('http');
const fs = require('fs');
const bodyparser = require("body-parser");

var path = require('path')
const app = express();


app.listen(3000, function(){
  console.log("Server Started on port 3000")
});

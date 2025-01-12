// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Read the comments.json file
let rawdata = fs.readFileSync('comments.json');
let comments = JSON.parse(rawdata);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
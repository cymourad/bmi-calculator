//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  console.log('User hit the root ...');
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmiCalculator', function(req, res) {
  console.log('User hit the bmi claculator ...');
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/add', function(req, res) {
  console.log(req.body);
  const sum = parseInt(req.body.num1) + parseInt(req.body.num2);
  res.send("These add up to: " + sum);
});

app.post('/multiply', function(req, res) {
  console.log(req.body);
  const sum = parseInt(req.body.num1) * parseInt(req.body.num2);
  res.send("These multipled give: " + sum);
});

app.post('/my-bmi', function(req, res) {
  console.log(req.body);
  const bmi = Number(req.body.weight) / Math.pow(Number(req.body.height), 2);
  var classifiation = 'normal';
  if (bmi >= 25) {
    classifiation = 'over-weight';
  } else if (bmi < 18.5) {
    classifiation = 'under-weight';
  }
  res.send("Your BMI is: " + bmi + '. You are considered <em>' + classifiation + '</em>.');
});

app.listen(3000, function() {
  console.log('Started listening to port 3000 ...');
});
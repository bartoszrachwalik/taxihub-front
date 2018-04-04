var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);


app.get('/', function (req, res) {
  res.send('Welcome to TaxiHub');
});

app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);



app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});

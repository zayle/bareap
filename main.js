const express = require('express');
const path = require('path');

var devPath = path.join(__dirname, 'development');
var app = express();
app.use('/static', express.static('production'));
app.get('/', function(req, res) {
  res.sendFile(path.join(devPath, 'app.html'));
});
app.listen(3000);

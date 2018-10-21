const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');

const html = __dirname + '/public';
const port = 3000;

app
  .use(compression())
  .use(bodyParser.json())
  .use(express.static(html))

  .listen(port, () => {
  console.log('Server started on port ' + port);
});

app.get('/', function(req, res) {});

app.route('/api/data').get((req, res) => {
    console.log("I'm here");
  res.json({
      data: [{lat: 0, long: 0},{lat: 39.2342, long: 98.2452},{lat: 39.2342, long: 88.2452},{lat: 39.2342, long: 108.2452}]
  });
});

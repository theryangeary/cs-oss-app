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
  res.send({
    data: [{ name: "Ryan" }, { name: "Mike" }]
  });
});

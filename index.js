// this is a comment
//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const data = require('./data.json');
const cors = require('cors');

const html = __dirname + '/public';
const port = 3000;

var whitelist = [
    'http://0.0.0.0:3000',
    'http://0.0.0.0:9876',
    'http://localhost:9876'
];

var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    }
};

app
    .use(compression())
    .use(bodyParser.json())
    .use(express.static(html))
    .use(cors(corsOptions))

    .listen(port, () => {
        console.log('Server started on port ' + port);
    });

app.get('/', function(req, res) {});

app.route('/api/data').get((req, res) => {
    console.log("GET /api/data request");
    res.json(data);
});

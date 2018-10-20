const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server started!');
});

app.route('/api/data').get((req, res) => {
  res.send({
    data: [{ name: "Ryan" }, { name: "Mike" }]
  });
});

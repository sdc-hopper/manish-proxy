const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(__dirname + '/../public'));
require('newrelic');


app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});

app.get('/Reviews/getReviews/:id', (req, res) => {
  axios.get(` http://ec2-3-140-254-7.us-east-2.compute.amazonaws.com:4006/Reviews/getReviews/${req.params.id}`)
  .then((reviews) => {
    res.send(reviews.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
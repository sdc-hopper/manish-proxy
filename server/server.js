const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(__dirname + '/../public'));


app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
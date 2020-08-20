const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('')
app.use(express.static(path.join(__dirname, './client/dist')));
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
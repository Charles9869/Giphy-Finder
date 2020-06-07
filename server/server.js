const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config({ path: './.env' });

const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/giphs'));

app.use((req, res, next) => {
  res.status(404).send({ message: "Endpoint doesn't exist!" });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

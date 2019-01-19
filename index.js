const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

const routes = require('./routes/route');

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/', routes);

app.listen(port, () => {
    console.log(`server started successfully ${port}`);
});
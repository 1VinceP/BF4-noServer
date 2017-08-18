const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

let app = express();
app.use( bodyParser.json() );
app.use( cors() );

let port = 9070;


















app.listen( port, () =>{
    console.log(`listening on port ${port}`)
} )
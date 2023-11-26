const express = require('express');
const expressHandlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const StudentRouter = require('./routers/StudentRouter');
const ProgramRouter = require('./routers/ProgramRouter');
const RegRouter = require('./routers/RegisterRouter');

app.use(express.static('public'));
app.engine('hbs',expressHandlebars({ extname: '.hbs',layoutsDir:__dirname+'/views/layouts'}));
app.set('view engine', 'hbs');

app.use('/student',StudentRouter);
app.use('/program',ProgramRouter);
app.use('/registratioin',RegRouter);

//server creation
const serverPort = process.env.SERVER_PORT || 3000;

app.listen(serverPort, () => {
  console.log(`Server start and Running on port ${serverPort}`);
});

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Constant

app.set('port', process.env.PORT || 2500);

//routes

app.use('/api/project_work', require('./routes/project_work.route'));
app.use('/api/type_work', require('./routes/type_work.route'));
app.use('/api/time_working', require('./routes/time_working.route'));

//starting the server

app.listen(app.get('port'), () => {
    console.log('Start Server on port: '+ app.get('port'));
});
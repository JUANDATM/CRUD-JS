const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
var myConnection = require('express-myconnection');
const app = express();

//importing routes

const customerRoutes = require('./routes/customer');




/////SETTINGS

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//middelwares

app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3307,
    database: 'crudemysql'

}, 'single'));
//routes
app.use('/', customerRoutes);



////Statics Files//////


app.use(express.static(path.join(__dirname, 'public')));


//starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
const express=require('express');
const path = require('path');
const morgan=require('morgan');
const helmet=require('helmet');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('view options',{
    strict: true,
    destructuredLocals:['markdown','archivos']
});
app.set('views',path.join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(helmet());
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/',require('./routes/routes.index'));


app.listen(app.get('port'), ()=>console.log('listening on port: ' + app.get('port')));
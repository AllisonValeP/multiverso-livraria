const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const sessionConfig = require('./src/config/session');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const indexRoute = require('./src/routes/IndexRoute');
const userRoute = require('./src/routes/UserRoute');

const admRoute = require('./src/routes/AdmRoute');
const purchaseRoute = require('./src/routes/PurchaseRoute');
const productRouter = require('./src/routes/ProductRoute');

app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({ secret: sessionConfig.secret , resave: sessionConfig.resave, saveUninitialized: sessionConfig.saveUninitialized}));


app.use('/',indexRoute)
app.use('/user',userRoute)
app.use('/product',productRouter)
app.use('/adm', admRoute)
app.use('/purchase', purchaseRoute)




// Roda o express na porta definida
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}. Acesse: http://127.0.0.1:3000/`);
})
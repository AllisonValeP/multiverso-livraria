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
const releasesRoute = require('./src/routes/ReleasesRoute');
const bagRoute = require('./src/routes/BagRoute');
const finalizeOrderRoute = require('./src/routes/FinalizeOrderRoute');
const admOrdersRoute = require('./src/routes/AdmOrdersRoute');
const changePassowrdRoute = require('./src/routes/ChangePasswordRoute');
const changePassowrdUserRoute = require('./src/routes/ChangePasswordUserRoute');
const deleteProductController = require('./src/routes/DeleteProductRoute');


app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({ secret: sessionConfig.secret , resave: sessionConfig.resave, saveUninitialized: sessionConfig.saveUninitialized}));


app.use('/',indexRoute);
app.use('/usuario',userRoute);
app.use('/product',productRouter);
app.use('/adm', admRoute);
app.use('/compra', purchaseRoute);
app.use('/lancamentos', releasesRoute);
app.use('/carrinho', bagRoute);
app.use('/finalizando', finalizeOrderRoute);
app.use('/admOrders', admOrdersRoute);
app.use('/admSenha', changePassowrdRoute);
app.use('/userSenha', changePassowrdUserRoute);
app.use('/deletar', deleteProductController );

app.use('*', (req,res)=>{
    res.redirect('/')
});




// Roda o express na porta definida
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}. Acesse: http://localhost:3000/`);
})
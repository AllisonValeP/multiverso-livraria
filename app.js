const express = require('express');
const app = express();
const port = 3000;
const indexRoute = require('./src/routes/IndexRoute')
const userRoute = require('./src/routes/UserRoute')
const productRoute = require('./src/routes/ProductRoute')
const userPainelRoute = require('./src/routes/UserPainelRoute')


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')
app.use(express.json());


app.use('/',indexRoute)
app.use('/user',userRoute)
app.use('/product',productRoute)
// app.use('/userpainel',userPainelRoute)


// Roda o express na porta definida
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}. Acesse: http://localhost:3000/`);
})
const express = require('express');
const app = express();
const port = 3000;
const indexRoute = require('./src/routes/IndexRoute')


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')
app.use(express.json());
app.use('/',indexRoute)


// Roda o express na porta definida
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
})
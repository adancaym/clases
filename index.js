var express = require('express')

var controllerIndex = require('./src/controller/controller')

var app = express();

app.get('/producto', controllerIndex.list)
app.post('/producto', controllerIndex.create)
app.put('/producto/:id', controllerIndex.update)
app.delete('/producto/:id', controllerIndex.remove)

app.listen(3000, ()=> {
    console.log('Estamos escuchando el puerto 3000')
})


const express = require('express')
const db =require('better-sqlite3')(`BDD.sqlite`)

const app = express()
const port = 3000

app.use(express.json())

app.get('/usuarios', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM usuarios').all();
   
    res.json(resultado)
})

app.get('/usuario', (req, res) => {

    usuarioId = req.query.id
    
    const resultado = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(usuarioId);
   
    res.json(resultado)
})

app.get('/productos', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM productos').all();
   
    res.json(resultado)
})

app.get('/producto', (req, res) => {

    productoId = req.query.id
    
    const resultado = db.prepare('SELECT * FROM productos WHERE id = ?').get(productoId);
   
    res.json(resultado)
})

app.get('/comandas', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM comandas').all();
   
    res.json(resultado)
})

app.get('/comanda', (req, res) => {

    comandaId = req.query.id
    
    const resultado = db.prepare('SELECT * FROM comandas WHERE id = ?').get(comandaId);
   
    res.json(resultado)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


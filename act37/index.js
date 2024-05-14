const express = require('express')
const db =require('better-sqlite3')(`BDD.sqlite`)

const app = express()
const port = 3000
const path = require('path');


app.set('view engine', 'ejs');

app.set('Views', path.join(__dirname, 'Views'));

app.use(express.json())


app.get('/', (req, res) => {
    res.render('body');

})

app.get('/tienda', (req, res) => {
    const usuarios = db.prepare('SELECT * FROM usuarios').all();
    const productos = db.prepare('SELECT * FROM productos').all();
   
    res.render('body', { usuarios, productos });
})
app.get('/usuarios', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM usuarios').all();
   
    res.render('usuarios', { usuarios: resultado});
})

app.get('/usuario', (req, res) => {

    usuarioId = req.query.id
    
    const resultado = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(usuarioId);
   
    res.json(resultado)
})

app.get('/productos', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM productos').all();
   
    res.render('productos', { productos: resultado });
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
app.post('/usuari', (req, res) => {
    const { nom, email } = req.body;

    
    const insertUser = db.prepare('INSERT INTO usuarios (nom, email) VALUES (?, ?)');
    const result = insertUser.run(nom, email);

    if (result.changes > 0) {
        res.status(201).json({ message: 'User created successfully' });
    } else {
        res.status(500).json({ message: 'Failed to create user' });
    }
});
app.post('/producte', (req, res) => {
    const { nom, preu } = req.body;

    const insertProducte = db.prepare('INSERT INTO productos (nom, preu) VALUES (?, ?)');
    const result = insertProducte.run(nom, preu);

    if (result.changes > 0) {
        res.status(201).json({ message: 'Product created successfully' });
    } else {
        res.status(500).json({ message: 'Failed to create product' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


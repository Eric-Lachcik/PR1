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

    
    if (!nom || !email) {
        return res.status(400).json({ message: 'Nombre y email son campos obligatorios' });
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Formato de email incorrecto' });
    }

    const insertUser = db.prepare('INSERT INTO usuarios (nom, email) VALUES (?, ?)');
    const result = insertUser.run(nom, email);

    if (result.changes > 0) {
        res.status(201).json({ message: 'Usuario creado' });
    } else {
        res.status(500).json({ message: 'Usuario no creado' });
    }
});

app.get('/addusuario', (req, res) => {
    res.render('addusuarios');
});

app.post('/producte', (req, res) => {
    const { nom, preu } = req.body;

    if (!nom || nom.trim() === '') {
        return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    const preuNumber = parseFloat(preu);
    if (isNaN(preuNumber) || preuNumber <= 0) {
        return res.status(400).json({ message: 'El precio debe ser un número positivo' });
    }

    const insertProducte = db.prepare('INSERT INTO productos (nom, preu) VALUES (?, ?)');
    const result = insertProducte.run(nom, preu);

    if (result.changes > 0) {
        res.status(201).json({ message: 'Producto creado' });
    } else {
        res.status(500).json({ message: 'Producto no creado' });
    }
});

app.get('/addproducto', (req, res) => {
    res.render('addproductes');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


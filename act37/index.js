const express = require('express')
const bodyParser = require('body-parser');
const db =require('better-sqlite3')(`BDD.sqlite`)

const app = express()
const port = 3000
const path = require('path');


app.set('view engine', 'ejs');

app.set('Views', path.join(__dirname, 'Views'));

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));


// Get General de la tienda

app.get('/tienda', (req, res) => {
    const usuarios = db.prepare('SELECT * FROM usuarios').all();
    const productos = db.prepare('SELECT * FROM productos').all();
   
    res.render('body', { usuarios, productos });
})


// Gets Segun Su ID

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const resultado = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(id);
    res.render('usuario', { usuario: resultado});
})

app.get('/productos/:id', (req, res) => {
    const id = req.params.id;
    const resultado = db.prepare('SELECT * FROM productos WHERE id = ?').get(id);
    res.render('producto', { producto: resultado });
})
app.get('/comandas/:id', (req, res) => {
    const id = req.params.id;
    const resultado = db.prepare(`
    SELECT comandas.id, usuarios.nom AS usuario_nombre, productos.nom AS producto_nombre
    FROM comandas
    INNER JOIN usuarios ON comandas.usuarios_id = usuarios.id
    INNER JOIN productos ON comandas.productos_id = productos.id
    WHERE comandas.id = ?`).get(id);
    res.render('comanda', { comanda: resultado });
})


// Get General de Cada Tabla

app.get('/usuarios', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM usuarios').all();
   
    res.render('usuarios', { usuarios: resultado});
})

app.get('/productos', (req, res) => {
    
    const resultado = db.prepare('SELECT * FROM productos').all();
   
    res.render('productos', { productos: resultado });
})

app.get('/comandas', (req, res) => {
    
    const resultado = db.prepare(`
    SELECT comandas.id, usuarios.nom AS usuario_nombre, productos.nom AS producto_nombre
    FROM comandas
    INNER JOIN usuarios ON comandas.usuarios_id = usuarios.id
    INNER JOIN productos ON comandas.productos_id = productos.id
`).all();
   
    res.render('comandas', { comandas: resultado });
})


// Metodos Post Update

app.post('/usuariosupdate', (req, res) => {
    
    const { nom, email, id } = req.body;

    const updateUser = db.prepare('UPDATE usuarios SET nom = ?, email = ? WHERE id = ?');
    const result = updateUser.run(nom, email, id);

    if (result.changes > 0) {
        res.redirect('/usuarios');
    } else {
        res.status(500).json({ message: 'Usuario no actualizado' });
    }
})

// Metodos Post

app.post('/usuari', (req, res) => {
    const { nom, email } = req.body;

    
    if (!nom || !email) {
        return res.status(400).json({ message: 'Nombre y email son campos obligatorios' });
    }


    const insertUser = db.prepare('INSERT INTO usuarios (nom, email) VALUES (?, ?)');
    const result = insertUser.run(nom, email);

    if (result.changes > 0) {
        res.redirect('/usuarios');
    } else {
        res.status(500).json({ message: 'Usuario no creado' });
    }
})

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
       
        res.redirect('/productos');
    } else {
        res.status(500).json({ message: 'Producto no creado' });
    }
})

app.post('/comanda', (req, res) => {
    const { usuarios_id, productos_id} = req.body;

    if (!usuarios_id || !productos_id) {
        return res.status(400).json({ message: 'ID de usuario y ID de producto son campos obligatorios' });
    }

    const insertComanda = db.prepare('INSERT INTO comandas (usuarios_id,productos_id) VALUES (?, ?)');
    const result = insertComanda.run(usuarios_id, productos_id);

    if (result.changes > 0) {
        res.redirect('/comandas');
    } else {
        res.status(500).json({ message: 'Comanda no creada' });
    }
})


// Metodos Get para los formularios

app.get('/addusuario', (req, res) => {
    res.render('addusuarios');
})

app.get('/addproducto', (req, res) => {
    res.render('addproductos');
})

app.get('/addcomanda', (req, res) => {
    res.render('addcomandas');
})


// Puerto de Escucha

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


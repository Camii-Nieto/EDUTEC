require('./db/mongoose');
const express = require('express');
const app = express();
const port = 3001;
const Product = require('./model/products');
const Category = require('./model/categories');
const SelectServ = require('./model/selectionServ');
const Service = require('./model/services');
const SlideEM = require('./model/slidesEM');
const SlideME = require('./model/slidesME');



app.use(express.json());

// Read-- Mostrar todos los productos
app.get('/products', (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Productos a la DB
app.post('/product', (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() => {
            res.status(201).send(product);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Read-- Mostrar todas las categorias
app.get('/categories', (req, res) => {
    Category.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Categorias a la DB
app.post('/category', (req, res) => {
    const category = new Category(req.body)
    category.save()
        .then(() => {
            res.status(201).send(category);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Read-- Mostrar todos los servicios
app.get('/selectionServ', (req, res) => {
    SelectServ.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Servicios a la DB
app.post('/selectServ', (req, res) => {
    const selectServ = new SelectServ(req.body)
    selectServ.save()
        .then(() => {
            res.status(201).send(selectServ);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Read-- Mostrar todos los servicios
app.get('/services', (req, res) => {
    Service.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Servicios a la DB
app.post('/service', (req, res) => {
    const service = new Service(req.body)
    service.save()
        .then(() => {
            res.status(201).send(service);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Read-- Mostrar todas las slides
app.get('/slidesEM', (req, res) => {
    SlideEM.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Slides a la DB
app.post('/slideEM', (req, res) => {
    const slideEM = new SlideEM(req.body)
    slideEM.save()
        .then(() => {
            res.status(201).send(slideEM);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Read-- Mostrar todas las slides
app.get('/slidesME', (req, res) => {
    SlideME.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Slides a la DB
app.post('/slideME', (req, res) => {
    const slideME = new SlideME(req.body)
    slideME.save()
        .then(() => {
            res.status(201).send(slideME);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});
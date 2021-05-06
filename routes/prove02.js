const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

const products = []

// If looking for icon, ignore request
router.post('/pages/prove02display', (req, res, next) => {
});

router.get('/', (req, res, next) => {
    // const products = data;
    res.render('pages/prove02input', {
        prods: products,
        docTitle: 'Prove 02',
        path: '/pages/prove02input',
        hasProducts: (products.length > 0),
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;
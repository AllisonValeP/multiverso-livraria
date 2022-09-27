const { check, body } = require("express-validator");
const { Product, Publisher, Author, Category, Image, Address, User, Order } = require("../models");



const validateProduct = [
    check('name').notEmpty().withMessage('Preencha o titulo! '),
    check('stock').notEmpty().withMessage('Preencha a quantidade! ').isDecimal().withMessage('Deve ser um numero. '),
  
    
]




module.exports = { validateProduct }
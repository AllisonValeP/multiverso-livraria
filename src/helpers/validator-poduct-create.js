const { check, body } = require("express-validator");




const validateProduct = [
    check('name').notEmpty().withMessage('Preencha o titulo! '),
    check('stock').notEmpty().withMessage('Preencha a quantidade! ').isDecimal().withMessage('Deve ser um numero. '),
    check('price').notEmpty().withMessage('Preencha o valor! ').isDecimal().withMessage('Deve ser um numero. '),
    check('description').notEmpty().withMessage('Preencha a descrição! ').isLength({ min: 10 }).withMessage('Mínimo 50 caracteres! '),
   
]




module.exports = { validateProduct }
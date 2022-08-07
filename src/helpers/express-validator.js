const { check } = require("express-validator");

const validateRegistration = [
    check('nome').notEmpty().withMessage('O campo nome é obrigatório! ').isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres!'),
    check('sobrenome').notEmpty().withMessage('O campo sobrenome é obrigatório').isLength({ min: 3 }).withMessage('O sobrenome deve ter pelo menos 3 caracteres!'),
    check('email').isEmail().withMessage('O e-mail precisa ser válido'),
    check('password').isLength({min: 8}).withMessage('A senha deve ter no minimo 8 caracteres'),
    check('confirmPassword').isLength({min: 8}).withMessage(' ').custom((confirmPassword, {req}) =>{
        const password = req.body.password;
        if(password !== confirmPassword){
            throw new Error("As senhas não coincidem");
        }
        return confirmPassword

    })

]

module.exports = { validateRegistration };
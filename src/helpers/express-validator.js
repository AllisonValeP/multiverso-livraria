const { check } = require("express-validator");
const { Sequelize, User } = require("../models");


const validateRegistration = [
    check('nome').notEmpty().withMessage('O campo nome é obrigatório! ').isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres!'),
    check('sobrenome').notEmpty().withMessage('O campo sobrenome é obrigatório').isLength({ min: 3 }).withMessage('O sobrenome deve ter pelo menos 3 caracteres!'),
    check('email').isEmail().withMessage('O e-mail precisa ser válido').custom(async emailBody => {

        const procuraEmail = await User.findOne({
            where: {
                email: emailBody
            }
        })
        if (!emailBody) {
            return Promise.reject("E-mail é obrigatório");
        }
        if (procuraEmail) {
          
            return Promise.reject("E-mail já cadastrado");
        }
        if (!procuraEmail) {
            return emailBody;
        }
    }),
check('senha').isLength({ min: 8 }).withMessage('A senha deve ter no minimo 8 caracteres'),
    check('confirmSenha').isLength({ min: 8 }).withMessage(' ').custom((confirmSenha, { req }) => {
        const senha = req.body.senha;
        if (senha !== confirmSenha) {
            throw new Error("As senhas não coincidem");
        }
        return confirmSenha;

    })

]




module.exports = { validateRegistration };
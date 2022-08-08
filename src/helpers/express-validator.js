const { check } = require("express-validator");
const fs = require("fs");
const path = require("path");

const validateRegistration = [
    check('nome').notEmpty().withMessage('O campo nome é obrigatório! ').isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres!'),
    check('sobrenome').notEmpty().withMessage('O campo sobrenome é obrigatório').isLength({ min: 3 }).withMessage('O sobrenome deve ter pelo menos 3 caracteres!'),
    check('email').isEmail().withMessage('O e-mail precisa ser válido').custom(async email =>{
        const usersJson= fs.readFileSync(
            path.join(__dirname, "..", "data", "users.json"),
            "utf-8"
          );
        const users = JSON.parse(usersJson);
       console.log
        const procuraEmail = await users.find((user)=>{
            if (user.email === email) {
                return true;
            }

        })
        
        if(!email ){
            return Promise.reject("E-mail é obrigatório");
        }
        if(procuraEmail){
            return Promise.reject("E-mail já cadastrado");
        }
        if (!procuraEmail) {
            return email;
        }
    }),
    check('senha').isLength({min: 8}).withMessage('A senha deve ter no minimo 8 caracteres'),
    check('confirmSenha').isLength({min: 8}).withMessage(' ').custom((confirmSenha, {req}) =>{
        const senha = req.body.senha;
        if(senha !== confirmSenha){
            throw new Error("As senhas não coincidem");
        }
        return confirmSenha;

    })

]

module.exports = { validateRegistration };
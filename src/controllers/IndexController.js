const {validationResult} = require('express-validator');

const indexController ={
  // centralizar as rotas de login, create, 
    index: (req, res)=>{
        return res.render('index')
      },
      create: (req, res) => {
        return res.render("login-create")
    },
    store:(req, res) => {
      const errors = validationResult(req);
      console.log(errors)
      if(!errors.isEmpty()) {
        res.render('login-create', {
          errors : errors.mapped(),
          old: req.body,
        });
    }
  },
    loginShow: (req, res) => {
      return res.render("login")
    },
}

module.exports = indexController
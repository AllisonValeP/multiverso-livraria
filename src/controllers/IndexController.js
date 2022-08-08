const fs = require('fs');
const path = require("path");
const bcrypt = require('../helpers/bcrypt');
const { validationResult } = require('express-validator');



const indexController = {
  // centralizar as rotas de login, create, 
  index: (req, res) => {
    return res.render('index')
  },
  create: (req, res) => {
    return res.render("login-create")
  },
  store: (req, res) => {
    const errors = validationResult(req);
   
    if (!errors.isEmpty()) {
      res.render('login-create', {
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      const usersJson = fs.readFileSync(
        path.join(__dirname, "..", "data", "users.json"),
        "utf-8"
      )
      const users = JSON.parse(usersJson);
      const { nome, sobrenome, email, senha } = req.body;
      const newId = users[users.length - 1].id + 1;
      const newUser = {
        id: newId,
        nome,
        sobrenome,
        email,
        senha: bcrypt.generateHash(senha),
        admin: false,
        criadoEm: new Date(),
        modificadoEm: new Date(),
      };
      users.push(newUser);
      fs.writeFileSync(
        path.join(__dirname, "..", "data", "users.json"),
        JSON.stringify(users)
      );
     res.redirect("login");
    }
  },
  loginShow: (req, res) => {
    return res.render("login")
  },
}

module.exports = indexController
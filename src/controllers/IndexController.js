const fs = require('fs');
const path = require("path");
const bcrypt = require('../helpers/bcrypt');
const { validationResult } = require('express-validator');



const indexController = {
  // centralizar as rotas de login, create, 
  index: (req, res) => {
    return res.render('index',
    {
      title: 'Multiverso Livraria',
      user: req.cookies.user,
     
     
    });
  },
  register: (req, res) => {
    return res.render("login-create",{
      title: 'Cadastre-se Agora | Multiverso Livraria',
      user: req.cookies.user,

    })
  },
  create: (req, res) => {
    const errors = validationResult(req);
   
    if (!errors.isEmpty()) {
      res.render('login-create', {
        title: 'Realize seu Cadastro | Multiverso Livraria',
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
  login: (req, res) => {
    return res.render("login",
    {
      title: 'Faça Login | Multiverso Livraria',
      user: req.cookies.user,
    
    });
  },
  auth:(req, res)=>{
    res.clearCookie("user");
    

    const usersJson = fs.readFileSync(
      path.join(__dirname, "..", "data", "users.json"),
      "utf-8"
    );

    const users = JSON.parse(usersJson);

    const { email, senha } = req.body;
    const userAuth = users.find((user) => {
      if (user.email === email) {
        if (bcrypt.compareSync(senha, user.senha)) {
          return true;
        }
        // O if de cima é a mesma coisa da linha abaixo
        // return bcrypt.compareHash(senha, user.senha);
      }
    });

    if (!userAuth) {
      return res.render("login", {
        title: "Faça Login | Multiverso Livraria",
        user: req.cookies.user,
        old: req.body,
        error: {
          message: "Email ou senha inválido",
        },
      });
    }
    // Filtra as chaves que o objeto irá ter
    const user = JSON.parse(
      JSON.stringify(userAuth, ["id", "nome", "sobrenome", "apelido", "admin"])
    );
    req.session.email = userAuth.email;
    res.cookie("user", user);    
      if(user.admin){
        res.redirect("/adm");
      }
      if(!user.admin){
        res.redirect("/");
      }
    
  },
  // Processamento do deslogar
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/");

  }
}


module.exports = indexController
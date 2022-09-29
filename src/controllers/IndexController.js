const fs = require('fs');
const path = require("path");
const { Product, User, Image } = require("../models");
const bcrypt = require('../helpers/bcrypt');
const { validationResult } = require('express-validator');
const upload = require("../config/upload")
const files = require("../helpers/file")

const indexController = {
  // centralizar as rotas de login, create, 
  index: async (req, res) => {
    try {
      const images = await Image.findAll({
        include: {
          model: Product,
          as: "product",
          required: true,
        }
      });

      // let products = images.map((item,i)=>{
      //   let result= images[i].product[0]
      //   return result
      // })

      let image = images.map((img,i)=>{
        let result = upload.path + images[0].filename.split(".")[0]
           
        return result
     
      })
image.forEach((arry,i)=>{
      
   image = files.base64Encode(`${arry}.png`)
     
     
    })
      
      // upload.path + images[0].filename.split(".")[0]
      // image = files.base64Encode(`${image}.png`)
//    
 

     

      return res.render('index',
        {
          title: 'Multiverso Livraria',
          user: req.cookies.user,
          products: images,
          imgs: image,
          
       

        });

    } catch (error) {

    }

  },
  register: (req, res) => {
    return res.render("login-create", {
      title: 'Cadastre-se Agora | Multiverso Livraria',
      user: req.cookies.user,

    })
  },
  create: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('login-create', {
        title: 'Realize seu Cadastro | Multiverso Livraria',
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      const { nome, sobrenome, email, senha } = req.body;
      const newUser = await User.create({
        name: nome,
        last_name: sobrenome,
        email: email,
        password: bcrypt.generateHash(senha),
      });

      return res.redirect("login");
    }
  },
  login: (req, res) => {
    return res.render("login",
      {
        title: 'Faça Login | Multiverso Livraria',
        user: req.cookies.user,

      });
  },
  auth: async (req, res) => {
    res.clearCookie("user");
    const { email, senha } = req.body;
    try {
      const userAuth = await User.findOne({ where: { email: email } });
      // const checkPassword = await bcrypt.compareSync(senha, userAuth.password)

      if (!userAuth || !bcrypt.compareSync(senha, userAuth.password)) {
        return res.render("login", {
          title: "Faça Login | Multiverso Livraria",
          user: req.cookies.user,
          old: req.body,
          error: {
            message: "Email ou senha inválido",
          },
        });
      }
      req.session.email = userAuth.email;
      res.cookie("user", userAuth);


      if (userAuth.is_admin) {
        res.redirect("/adm");
      }
      if (!userAuth.is_admin) {
        res.redirect("/");
      }

    } catch (error) {
      console.log("Qual erro:" + error);


    }

    // const userAuth = users.find((user) => {
    //   if (user.email === email) {
    //     if (bcrypt.compareSync(senha, user.senha)) {
    //       return true;
    //     }
    //     // O if de cima é a mesma coisa da linha abaixo
    //     // return bcrypt.compareHash(senha, user.senha);
    //   }
    // });

    // if (!userAuth) {
    //   return res.render("login", {
    //     title: "Faça Login | Multiverso Livraria",
    //     user: req.cookies.user,
    //     old: req.body,
    //     error: {
    //       message: "Email ou senha inválido",
    //     },
    //   });
    // }
    // // Filtra as chaves que o objeto irá ter
    // const user = JSON.parse(
    //   JSON.stringify(userAuth, ["id", "nome", "sobrenome", "apelido", "admin"])
    // );
    // req.session.email = userAuth.email;
    // res.cookie("user", user);
    // if (user.admin) {
    //   res.redirect("/adm");
    // }
    // if (!user.admin) {
    //   res.redirect("/");
    // }

  },
  // Processamento do deslogar
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/");

  }
}


module.exports = indexController
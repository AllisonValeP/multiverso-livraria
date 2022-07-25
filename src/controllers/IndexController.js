const indexController ={
  // centralizar as rotas de login, create, 
    index: (req, res)=>{
        return res.render('index')
      },
      create: (req, res) => {
        return res.render("login-create")
    },
    loginShow: (req, res) => {
      return res.render("login")
    },
}

module.exports = indexController
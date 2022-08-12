const admController = {
    index: (req, res) => {
        return res.render("adm-painel",
        {
          title: 'Administrador | Multiverso Livraria',
          user: req.cookies.user,
        })
    },
    productShow: (req, res) => {
       return res.render("adm-product",
       {
         title: 'Administrador | Multiverso Livraria',
         user: req.cookies.user,
       })
    },
    userShow: (req, res) => {
        return res.render("adm-user",
        {
          title: 'Administrador | Multiverso Livraria',
          user: req.cookies.user,
        })
    },
    orderShow: (req, res) => {
        return res.render("adm-order",
        {
          title: 'Administrador| Multiverso Livraria',
          user: req.cookies.user,
        })
    },
    profileShow: (req, res) => {
        return res.render("adm-profile",
        {
          title: 'Administrador | Multiverso Livraria',
          user: req.cookies.user,
        })
    },
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
  };
  
  module.exports = admController;
const admController = {
    index: (req, res) => {
        return res.render("adm-painel",
        {
          title: 'Administrador | Multiverso Livraria'
        })
    },
    productShow: (req, res) => {
       return res.render("adm-product",
       {
         title: 'Administrador | Multiverso Livraria'
       })
    },
    userShow: (req, res) => {
        return res.render("adm-user",
        {
          title: 'Administrador | Multiverso Livraria'
        })
    },
    orderShow: (req, res) => {
        return res.render("adm-order",
        {
          title: 'Administrador| Multiverso Livraria'
        })
    },
    profileShow: (req, res) => {
        return res.render("adm-profile",
        {
          title: 'Administrador | Multiverso Livraria'
        })
    },
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
  };
  
  module.exports = admController;
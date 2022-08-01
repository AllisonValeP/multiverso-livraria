const admController = {
    index: (req, res) => {
        return res.render("adm-painel")
    },
    productShow: (req, res) => {
       return res.render("adm-product")
    },
    userShow: (req, res) => {
        return res.render("adm-user")
    },
    orderShow: (req, res) => {
        return res.render("adm-order")
    },
    edit: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
  };
  
  module.exports = admController;
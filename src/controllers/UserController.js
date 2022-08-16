const userController = {
    index: (req, res) => {},
    show: (req, res) => {},
    store: (req, res) => {},
    edit: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
    showPainel: (req, res) => {
      return  res.render("user-painel",
      {
        title: 'Informação de Pagamento | Multiverso Livraria',
        user: req.cookies.user,
      })
    },
  };
  
  module.exports = userController;
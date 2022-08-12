const productController = {
    index: (req, res) => {
        return res.render("product",
        {
          title: 'Livro | Multiverso Livraria',
          user: req.cookies.user,
        })
    },
    show: (req, res) => {},
    create: (req, res) => {},
    store: (req, res) => {},
    edit: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
  };
  
  module.exports = productController;
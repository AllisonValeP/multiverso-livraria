const purchaseController = {
    index: (req, res) => {
        return res.render("purchase",
        {
          title: 'Informação de Pagamento | Multiverso Livraria'
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
  
  module.exports = purchaseController;
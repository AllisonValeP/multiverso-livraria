const userController = {
    index: (req, res) => {
        return res.render("login")
    },
    show: (req, res) => {},
    create: (req, res) => {
        return res.render("login-create")
    },
    store: (req, res) => {},
    edit: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
  };
  
  module.exports = userController;
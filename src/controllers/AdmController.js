
const sharp = require("sharp");
const path = require("path");

const { Product, Image } = require("../models");


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
  createProduct: (req, res) => {
    return res.render("adm-create-product",
      {
        title: 'Criar Produto | Multiverso Livraria',

      })

  },
  updateProduct: async (req, res) => {
    const { name, description, price, stock, publisher_id, author_id, category_id } = req.body
    const file = req.file
       
    try {
    

    } catch (err) {
      console.log("Erro  do processar updateProduct");

    }
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
  update: (req, res) => { },
  delete: (req, res) => { },
  destroy: (req, res) => { },
};

module.exports = admController;
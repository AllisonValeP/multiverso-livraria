
const sharp = require("sharp");
const path = require("path");
const { Product,Publisher,Author,Category, Image,ImageProduct } = require("../models");


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
  createProduct: async (req, res) => {
    try {
      const publishers = await Publisher.findAll();
      const authors = await Author.findAll();
      const categories = await Category.findAll();
     
      return res.render("adm-create-product",
        {
          title: 'Criar Produto | Multiverso Livraria',
          publishers: publishers,
          authors: authors,
          categories: categories,  
        })
    } catch (err) {
      console.log(err)

    }

  },
  updateProduct: async (req, res) => {
    const { name, description, price, stock, publisher_id, author_id, category_id } = req.body
    const file = req.file
       
    try {
      const product = await Product.create({
        name,
        description,
        price,
        stock,
        publisher_id,
        author_id,
        category_id,
        image:[{
          original_name: file.originalname,
          size: file.size,
          extension: file.filename.split(".")[1],
          filename: file.filename,
        }]
      },{
        include: "image"
      })
    
      return res.redirect("/adm/create-product");
    

    } catch (err) {
      console.log(err);

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
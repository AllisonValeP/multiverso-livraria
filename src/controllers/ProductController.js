
const sharp = require("sharp");
const path = require("path");
const { Product, Publisher, Author, Category, Image, Address, User, Order } = require("../models");
const { NOW } = require("sequelize");
const { info, Console } = require("console");
const fs = require("fs");
const upload = require("../config/upload")
const files = require("../helpers/file")


const productController = {
    index: (req, res) => {},
    show: async (req, res) => {
      const {id} = req.params
      try {
        
        const product = await Product.findByPk(
          id,{
            include:[{
              model: Author,
                as: "author",
                required: true,
            },{
              model:Publisher,
                as: "publisher",
                required: true,
            },{
              model:Category,
                as: "category",
                required: true,
            },{
              model:Image,
                as: "image",
                required: true,
            }
  
          ],
        })
        if (!product) {
          throw Error("Produto não encontrado")
        };
        let image =  upload.path + product.image[0].filename.split(".")[0]
        image = files.base64Encode(`${image}.png`)
        
        return res.render("product",
          {
            title: 'Administrador | Multiverso Livraria',
            user: req.cookies.user,
            product: product,
            image: image,
          })
        
      } catch (error) {
        console.log(error)
        
        return res.render("error",
          {
            title: 'Error | Multiverso Livraria',
            user: req.cookies.user,
            message: error.message
          }) 
      }
    },
    create: (req, res) => {},
    store: (req, res) => {},
    edit: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {},
    destroy: (req, res) => {},
  };
  
  module.exports = productController;
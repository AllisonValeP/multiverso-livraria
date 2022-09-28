
const sharp = require("sharp");
const path = require("path");
const { Product, Publisher, Author, Category, Image, Address, User, Order } = require("../models");
const { NOW } = require("sequelize");
const { info, Console } = require("console");
const fs = require("fs");
const upload = require("../config/upload")
const { validationResult } = require('express-validator');


const admController = {
  index: async (req, res) => {

    return res.render("adm-painel",
      {
        title: 'Administrador | Multiverso Livraria',
        user: req.cookies.user,

      })


  },
  productsShow: async (req, res) => {

    let { page = 1 } = req.query;
    try {
      let { count: total, rows: products } = await Product.findAndCountAll({
        include:[{
          model: Author,
            as: "author",
            required: false,
        }],
        limit: 4,
        offset: (page - 1) * 4
      });
      let totalPage = Math.round(total / 4)
      console.log(products[0].author);
      return res.render("adm-products",
      {
        title: 'Administrador | Multiverso Livraria',
        user: req.cookies.user,
        products: products,
          totalPage: totalPage,
      })
     
    } catch (error) {
    
      console.log(error);
      return res.render("error",
        {
          title: 'Error | Multiverso Livraria',
          user: req.cookies.user,
          message: "Error ao processar lista de produtos!"
        }) 
    }











  
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
  storeProduct: async (req, res) => {
    const { name, description, price, stock, publisher_id, author_id, category_id } = req.body
    const file = req.file;
   const errors = validationResult(req);
    
    try {
      const publishers = await Publisher.findAll();
      const authors = await Author.findAll();
      const categories = await Category.findAll();
      if (!errors.isEmpty()) {
  
        res.render('adm-create-product', {
          title: 'Criar Produto | Multiverso Livraria',
          publishers: publishers,
          authors: authors,
          categories: categories,
          errors: errors.mapped(),
          old: req.body,
        });
      } else {
      const product = await Product.create({
        name,
        description,
        price,
        stock,
        publisher_id,
        author_id,
        category_id,
        image: [{
          original_name: file.originalname,
          size: file.size,
          extension: file.filename.split(".")[1],
          filename: file.filename,
        }]
      }, {
        include: "image"
      })

      return res.render("newProductConfirm",
        {
          title: 'Sucesso | Multiverso Livraria',
          user: req.cookies.user,
          
        }) 
    }

    } catch (error) {

      const filename = file.filename.split(".")[0]

      setTimeout(() => {

        fs.unlinkSync(path.join(upload.path, `${filename}.png`))
      }, 9000);

      console.log(error);
      return res.render("error",
        {
          title: 'Error | Multiverso Livraria',
          user: req.cookies.user,
          message: error.message
        }) 
    }
  },
  usersShow: async (req, res) => {
    let { page = 1 } = req.query;
    try {
      let { count: total, rows: users } = await User.findAndCountAll({
        limit: 5,
        offset: (page - 1) * 5
      });
      let totalPage = Math.round(total / 5)

      return res.render("adm-users",
        {
          title: 'Administrador | Multiverso Livraria',
          user: req.cookies.user,
          users: users,
          totalPage: totalPage,
        })
    } catch (error) {
    
      return res.render("error",
        {
          title: 'Error | Multiverso Livraria',
          user: req.cookies.user,
          message: "Error ao processar lista usuários!"
        }) 
    }

  },
  userShow: async (req, res) => {
    const { id } = req.params
    try {
      const user = await User.findByPk(
        id,
        {
          include: [{
            model: Address,
            as: "address",
            required: false,
          },
          {
            model: Order,
            as: "order",
            required: false,

            include: {
              model: Product,
              as: "orderProduct",
              required: true,


            }


          }]

        }
      );
      if (!user) {
        throw Error("Usuário não encontrado")
      };
      let dateOrders = user.order

      let dateOrder = dateOrders.map((dateOrder, i) => {

        let dateFormat = new Date(dateOrders[i].createdAt)
        let year = dateFormat.getFullYear();
        let month = () => {
          let month = dateFormat.getMonth() + 1
          if (month <= 9) {
            return month = "0" + (dateFormat.getMonth() + 1)
          } else { return month }
        };
        let date = () => {
          let date = dateFormat.getDate()
          if (date <= 9) {
            return date = "0" + dateFormat.getDate()
          } else { return date }
        };
        return dateFormat = `${date()}/${month()}/${year}`;

      })
      let dateReg = new Date(user.createdAt);

      let year = dateReg.getFullYear();
      let month = () => {
        let month = dateReg.getMonth() + 1
        if (month <= 9) {
          return month = "0" + (dateReg.getMonth() + 1)
        } else { return month }
      };
      let date = () => {
        let date = dateReg.getDate()
        if (date <= 9) {
          return date = "0" + dateReg.getDate()
        } else { return date }
      };

      dateReg = `${date()}/${month()}/${year}`;


      return res.render("adm-user", {
        title: 'Administrado | Multiverso Livraria',
        user: user,
        address: user.address,
        orders: user.order,
        date: dateReg,
        dateOrders: dateOrder,



      });

    } catch (error) {
      
      return res.render("error",
        {
          title: 'Error | Multiverso Livraria',
          user: req.cookies.user,
          message: error.message
        }) 

    }
   
  },
  orderShow: (req, res) => {
    return res.render("adm-order",
      {
        title: 'Administrador| Multiverso Livraria',
        user: req.cookies.user,
      });
  },
  profileShow: (req, res) => {
    return res.render("adm-profile",
      {
        title: 'Administrador | Multiverso Livraria',
        user: req.cookies.user,
      });
  },
  update: (req, res) => { },
  delete: (req, res) => { },
  destroy: (req, res) => { },
};

module.exports = admController;
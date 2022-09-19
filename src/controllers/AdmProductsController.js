const admProductsController = {
    index: (req,res) => {
        return res.render("adm-products",
        {
            title: 'Produto Adcionado! | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}

module.exports = admProductsController
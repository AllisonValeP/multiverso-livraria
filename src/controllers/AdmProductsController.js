const admProductsController = {
    index: (req,res) => {
        return res.render("adm-products",
        {
            title: 'Gerenciar Produtos | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}

module.exports = admProductsController
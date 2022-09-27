const errorController = {
    index: (req,res) => {
        return res.render("error",
        {
            title: 'Erro ao adcionar produto! | Multiverso Livraria',
            user: req.cookies.user,
        })
        return res.render("newProductConfirm",
        {
            title: 'Produto Adcionado! | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}

module.exports = errorController


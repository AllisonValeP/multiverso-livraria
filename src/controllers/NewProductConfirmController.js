const newProductConfirmController = {
    index: (req,res) => {
        return res.render("newProductConfirm",
        {
            title: 'Produto Adcionado! | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}

module.exports = newProductConfirmController

const deleteProductController = {
    index: (req,res) => {
        return res.render("deleteProducts",
        {
            title: 'Deletar Produto | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}

module.exports = deleteProductController
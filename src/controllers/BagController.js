const bagController = {
    index: (req, res) => {
        return res.render("bag",
        {
            title: 'Finalização de compra | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}
module.exports = bagController
const admOrdersController = {
    index: (req,res) => {
        return res.render("adm-orders",
        {
            title: 'Histórico de Pedidos | Multiverso Livraria',
            user: req.cookies.user,
        })
    },
    
    
}

module.exports = admOrdersController
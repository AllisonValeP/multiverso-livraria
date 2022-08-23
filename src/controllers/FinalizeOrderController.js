const finalizeOrderController = {
    index: (req,res) =>{
        return res.render("finalizeOrder",
        {
            title: 'Finalizando Compra | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
};

module.exports = finalizeOrderController
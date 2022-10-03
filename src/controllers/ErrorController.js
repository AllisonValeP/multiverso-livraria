const errorController = {
    index: (req,res) => {
        return res.render("error",
        {
            title: 'Erro ao adicionar produto! | Multiverso Livraria',
            user: req.cookies.user,
        })
        
    }
}

module.exports = errorController


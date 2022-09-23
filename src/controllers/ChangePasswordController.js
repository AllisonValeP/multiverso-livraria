const changePasswordController = {
    index: (req,res) => {
        return res.render("changePassowrd",
        {
            title: 'Mudar Senha | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}
module.exports = changePasswordController
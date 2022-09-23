const changePasswordUserController = {
    index: (req,res) => {
        return res.render("changePassowrdUser",
        {
            title: 'Mudar Senha de usuario | Multiverso Livraria',
            user: req.cookies.user,
        })
    }
}
module.exports = changePasswordUserController
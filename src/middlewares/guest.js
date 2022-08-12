// Verifica se o usuário está logado
const guestMiddleware = (req, res, next) => {
    const isAuth = req.cookies.user;
    if (!isAuth) {
        next();
    }
    else {
        res.redirect("/");
    }
};
module.exports = guestMiddleware;
const authMiddleware = (req, res, next) => {
    const isAuth = req.cookies.user;
    if(!isAuth){
        next();
    }
    else{
        req.sessison.destroy();
        res.clearCookie('user');
        res.redirect("/");
    }
};

module.exports = authMiddleware;

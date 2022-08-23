const authMiddleware = (req, res, next) => {
    const isAuth = req.cookies.user;
  console.log(req.baseUrl)
    if (!isAuth || (isAuth && isAuth.admin && req.baseUrl === "/adm" )) {
      next();
    }
  
    else {
      req.session.destroy();
      res.clearCookie("user");     
      res.redirect("/");
    }
  };
  module.exports = authMiddleware;


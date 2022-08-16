const authMiddleware = (req, res, next) => {
    const isAuth = req.cookies.user;
  
    if (isAuth && isAuth.admin ) {
      next();
    }
    
    else {
      req.session.destroy();
      res.clearCookie("user");     
      res.redirect("/");
    }
  };
  module.exports = authMiddleware;
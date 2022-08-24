const authMiddleware = (req, res, next) => {
    const isAuth = req.cookies.user;
  // console.log(req.baseUrl)
    if (isAuth && isAuth.admin ) {
      next();
    }
  
    else {
     
      res.redirect("/");
    }
  };
  module.exports = authMiddleware;


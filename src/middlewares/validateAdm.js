const validateAdm = (req,res,next)=>{
    const isAuth = req.cookies.user;
    if(isAuth && isAuth.is_admin){
        res.redirect("/adm")
    
    }else{
        next()
    }
}
module.exports = validateAdm
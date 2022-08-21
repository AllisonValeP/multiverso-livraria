const releasesController = {
    index: (req, res) => {
        return res.render("releases",
        {
          title: 'Lançamentos | Multiverso Livraria',
          user: req.cookies.user,
        })
    },
};

module.exports = releasesController
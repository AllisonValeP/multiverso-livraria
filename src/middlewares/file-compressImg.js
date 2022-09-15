const imgCompress = require('../helpers/file-helper');

const fileCompressImg = async (req, res, next) => {
  if (req.file) {

    // Vamos mandar essa imagem para compressão antes de prosseguir
    // Ela vai retornar o a promise com o novo caminho como resultado, então continuamos com o then.
    imgCompress.compressImage(req.file, 100)
      .then(newPath => {
        // return res.send("Upload e compressão realizados com sucesso! O novo caminho é:" +newPath );
        // Vamos continuar normalmente, exibindo o novo caminho
      })
      .catch(err => console.log(err));
    }
next();
  // return res.send('Houve erro no upload!');
};


module.exports = fileCompressImg
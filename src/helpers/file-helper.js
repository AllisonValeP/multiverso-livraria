const fs = require('fs');
const sharp = require('sharp');


exports.compressImage = async (file, size) => {
    const newPath = file.path.split('.')[0] + '.png';
    console.log(newPath)

    return sharp(file.path)
        .resize({
            width: 645,
            height: 1024,
        })
        .toFormat('png')
        .toBuffer()

        .then(data => {

            // Deletando o arquivo antigo
            // O fs.acess serve para testar se o arquivo realmente existe, evitando bugs
            fs.access(file.path, (err) => {

                // Um erro significa que a o arquivo não existe, então não tentamos apagar
                if (!err) {
                    if (file.filename.split('.')[1] == "png") {
                        
                    }else{

                        fs.unlink(file.path, err => {
                            // Não quero que erros aqui parem todo o sistema, então só vou imprimir o erro, sem throw.
                            if (err) console.log(err)
                        })
                    }
                }
                //Se não houve erros, tentamos apagar
            });





            //Agora vamos armazenar esse buffer no novo caminho
            fs.writeFile(newPath, data, err => {
                if (err) {

                    // Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba.
                    throw err
                }


            });

            // Se o código chegou até aqui, deu tudo certo, então vamos retornar o novo caminho
            return newPath;
        })
}
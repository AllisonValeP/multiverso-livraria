var listaProdutos= {
    ultimoIdGerado:0,
    usuario:[
        {id:1, titulo:"Sobre anarquismo, sexo e casamento", quantidade:20, preço: 75.99, autor:"Emma GoldmanEmma Goldman", editora:"Hedra" },
        {id:2, titulo:"Manifesto Comunista", quantidade:15, preço: 27.50, autor:"Karl Marx e Friedrich Engels", editora:"Hedra" },
        {id:3, titulo:"Trabalhos e dias", quantidade:20, preço: 48.99, autor:"Hesíodo", editora:"Hedra" }
    ]
}

function print(){
    const tbody = document.getElementById('listaProdutosBody')
    if(tbody){
        tbody.innerHTML = listaProdutos.produto.map( produto => {
            return <tr>
                <td>${produto.id}</td>
                <td>${produto.titulo}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preço}</td>
                <td>${produto.autor}</td>
                <td>${produto.editora}</td>
            </tr>
        }).join('')

    }

}

function insertProduct(título, quantidade, preço, autor, editora){
    const id=listaProdutos.ultimoIdGerado + 1;
    listaProdutos.produto.push({
        título, quantidade, preço, escritor, editora 
    })

}

function editProduct (título, quantidade, preço, autor, editora){

}

function deleteProduct(id){

}


function visualizar(pagina){
    document.body.setAttribute('page', pagina)
    if(pagina === 'cadastro'){
        document.getElementById('nome').focus()
    }
}

window.addEventListener('load', () => {
    print()
})
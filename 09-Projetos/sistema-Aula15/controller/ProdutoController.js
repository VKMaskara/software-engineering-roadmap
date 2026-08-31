const prompt = require('prompt-sync')()
const produtos = []

function cadastroProduto() {
    const nome = prompt("Nome do produto: ")
    const preco = parseFloat(prompt("Preço do produto: "))
    const quantidade = parseInt(prompt("Quantidade em estoque: "))

    salvarProduto(nome, preco, quantidade)
}

function salvarProduto(nome, preco, quantidade) {
    const produto = {
        nome,
        preco,
        quantidade
    }

    produtos.push(produto)

    console.log("Produto cadastrado com sucesso!")
}

function listarProdutos() {
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i]

        console.log(
            `Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`
        )
    }
    
}

module.exports = {
    cadastroProduto,
    listarProdutos,
}
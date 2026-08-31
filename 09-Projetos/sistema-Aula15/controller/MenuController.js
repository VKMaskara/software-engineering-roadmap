const prompt = require("prompt-sync")({ sigint: true })
const { cadastroProduto, listarProdutos } = require("./ProdutoController")

function menu() {
   let controle = true

    while (controle) {
        console.log("1 - Cadastrar produto")
        console.log("2 - Listar produtos")
        console.log("3 - Sair")

        const opcao = parseInt(prompt("Escolha uma opção: "))

        if (opcao === 1) {

            cadastroProduto()

        } else if (opcao === 2) {

            listarProdutos()

        } else if (opcao === 3) {

            console.log("Saindo do programa...")
            break

        } else {

            console.log("Opção inválida. Por favor, escolha uma opção válida.")

        }
    }
}
module.exports = {
    menu,
}
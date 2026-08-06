# 🚀 Desafio da Aula — Aula 13

Você foi contratado para organizar um sistema de cadastro.

Atualmente, todo o código está escrito em um único bloco.

## Sem escrever código inicialmente

### Explique por que dividir esse sistema em funções seria uma boa prática.

Dividir o sistema em funções seria uma boa prática, pois oferece uma melhor organização e facilita a manutenção, conseguindo ter uma melhor estrutura e separando as responsabilidades específicas.

---

### Cite pelo menos quatro funções que poderiam existir nesse sistema.

- **Função `cadastrarUsuario`**: vai salvar o nome e a idade do usuário.
- **Função `listarUsuarios`**: vai listar todos os usuários cadastrados.
- **Função `menu`**: será o menu principal do sistema.


---

## Algoritmo em JavaScript

```javascript
const prompt = require('prompt-sync')()

let usuarios = []
let controle = true

function cadastrarUsuario(nome, idade) {
    const usuario = {
        nome: nome,
        idade: idade
    }

    usuarios.push(usuario)
}

function listarUsuarios() {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`)
    }
}

function menu() {
    while (controle) {
        let opcao = prompt(
            "Escolha uma opção:\n1 - Cadastrar usuário\n2 - Listar usuários\n3 - Sair\n"
        )

        if (opcao === "1") {
            const nome = prompt("Digite o nome do usuário: ")
            const idade = prompt("Digite a idade do usuário: ")

            cadastrarUsuario(nome, idade)

            console.log("Usuário cadastrado com sucesso!")

        } else if (opcao === "2") {

            listarUsuarios()

        } else {

            console.log("Saindo do programa...")
            controle = false

        }
    }
}

menu()
```

# 🚀 Desafio da Aula - Aula 14

Você recebeu um sistema de cadastro de produtos.

Atualmente, todas as informações estão armazenadas em variáveis globais.

## Sem escrever código inicialmente

### Explique por que isso pode se tornar um problema em um sistema grande.

Muitas variáveis globais tornam o sistema mais difícil de manter, pois qualquer função pode alterar seus valores, aumentando o risco de erros inesperados e criando dependências desnecessárias entre diferentes partes do código.

---

### Cite quais informações realmente precisariam ser globais.

Apenas o vetor `produtos` e eu coloquei uma variável de controle para o loop.

---

### Cite quais informações deveriam ser locais às funções.

- Nome do produto;
- Quantidade;
- Preço.

---

### Explique como essa divisão melhora a organização e a segurança do código.

Melhora a segurança das informações e a divisão de responsabilidades, facilitando a manutenção do código.

---

## Algoritmo em JavaScript

```javascript
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

function listarProdutos(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i]

        console.log(
            `Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`
        )
    }
}

let controle = true

while (controle) {
    console.log("1 - Cadastrar produto")
    console.log("2 - Listar produtos")
    console.log("3 - Sair")

    const opcao = parseInt(prompt("Escolha uma opção: "))

    if (opcao === 1) {

        cadastroProduto()

    } else if (opcao === 2) {

        listarProdutos(produtos)

    } else if (opcao === 3) {

        console.log("Saindo do programa...")
        break

    } else {

        console.log("Opção inválida. Por favor, escolha uma opção válida.")

    }
}
```

# proximo
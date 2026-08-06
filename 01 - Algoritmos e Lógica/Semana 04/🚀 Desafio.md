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

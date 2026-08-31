# 📝 Exercícios — Aula 13

## Exercício 1

**Explique com suas palavras:**

**O que é uma função?**

-> Função é um conjunto de instruções que tem uma tarefa específica e podemos reutilizá-las sempre que precisarmos.

---

## Exercício 2

Observe o algoritmo:

```javascript
function mensagem() {

    console.log("Bem-vindo!");

}

mensagem();
```

**Responda:**

**Qual é o nome da função?**

`mensagem()`

**Em qual linha ela é declarada?**

Na primeira linha, que diz `function mensagem() { ... }`.

**Em qual linha ela é executada?**

Na última, com a chamada da função `mensagem();`.

**Qual será a saída?**

```text
Bem-vindo!
```

---

## Exercício 3

Analise o código:

```javascript
function mostrarMenu() {

    console.log("1 - Entrar");

    console.log("2 - Sair");

}
```

**Responda:**

**Esse algoritmo exibirá o menu? Explique o motivo.**

Não, pois não chamou a função no final, apenas a declarou.

---

## Exercício 4

Observe as situações abaixo.

Identifique quais delas deveriam ser transformadas em funções.

Justifique.

- Mostrar o menu principal. → **Função**
- Calcular a média de um aluno. → **Função**
- Validar um CPF. → **Função**
- Exibir uma mensagem apenas uma única vez em todo o programa. → **Sem função**

# 📝 Exercícios - Aula 14

## Exercício 1

**Explique com suas palavras:**

**O que é escopo?**

**R:** O local onde declaro a variável determina o escopo dela, podendo ser **global**, quando eu a declaro na raiz do código e ela pode ser utilizada em qualquer parte ou função do sistema, ou **local**, quando eu a declaro dentro de um bloco específico. Nesse caso, ela só existe dentro daquele bloco de código e deixa de poder ser acessada fora dele.

---

## Exercício 2

Observe o algoritmo:

```javascript
let cidade = "São Paulo";

function mostrarCidade(){

    console.log(cidade);

}

mostrarCidade();
```

**Responda:**

**A variável `cidade` é global ou local?**

Global, pois é declarada fora do bloco da função.

**A função consegue acessá-la?**

Sim. Por ser uma variável global, qualquer função pode acessá-la.

**Qual será a saída?**

```text
São Paulo
```

---

## Exercício 3

Analise o algoritmo:

```javascript
function cadastrar(){

    let nome = "Maria";

    console.log(nome);

}

cadastrar();

console.log(nome);
```

**Responda:**

**O primeiro `console.log()` funciona?**

Sim, pois está dentro do escopo da variável.

**O segundo funciona? Explique o motivo.**

Não, pois está fora do escopo da variável `nome`. É como se ela não existisse.

---

## Exercício 4

Observe as variáveis abaixo:

```javascript
let empresa = "Navalhou";

function cadastrar(){

    let usuario = "João";

}

function listar(){

    let total = 10;

}
```

**Classifique cada variável como:**

- Global;
- Local.

**Justifique.**

**empresa** → Global, pois está fora de qualquer bloco de função, sendo declarada na raiz do código.

**usuario** → Local, pois é declarada dentro da função `cadastrar()`.

**total** → Local, pois é declarada dentro da função `listar()`.


# 📝 Exercícios — Aula 15

## Exercício 1

Explique com suas próprias palavras:

**O que é modularização e qual problema ela resolve?**

-> É a prática de dividir um sistema em pequenas partes de acordo com a responsabilidade e criar uma estrutura separada para cada coisa, como uma empresa que é separada por departamentos, onde cada um cumpre uma responsabilidade específica.

O principal problema que ela resolve é a organização, além de facilitar o trabalho em equipe e dar manutenibilidade ao sistema.

---

## Exercício 2

Um sistema possui estas funções:

```text
cadastrarUsuario()
listarUsuarios()
excluirUsuario()

cadastrarProduto()
listarProdutos()
buscarProduto()

realizarVenda()
cancelarVenda()
listarVendas()
```

Sem escrever código, organize essas funções em módulos e explique sua decisão.

-> Simples, aqui temos uma divisão por funções com uma responsabilidade em comum, separando por Usuários, Produtos e Vendas.

```text
/UsuarioController.js

    cadastrarUsuario()
    listarUsuarios()
    excluirUsuario()


/ProdutoController.js

    cadastrarProduto()
    listarProdutos()
    buscarProduto()


/VendaController.js

    realizarVenda()
    cancelarVenda()
    listarVendas()
```

-> Utilizei o Controller da estrutura MVC como exemplo, pois é a estrutura que eu mais utilizo normalmente, e elas são funções de controladores.

---

## Exercício 3

Observe:

### `produtos.js`

```javascript
function cadastrarProduto() {
    console.log("Produto cadastrado.");
}

function validarProduto() {
    console.log("Produto validado.");
}

module.exports = {
    cadastrarProduto
};
```

Responda:

### a) Qual função pode ser utilizada por outro módulo?

```text
cadastrarProduto()
```

### b) `validarProduto()` existe?

Sim, mas dentro do escopo do arquivo. Ela é utilizada como um recurso interno e não precisa ser exportada.

### c) Por que ela não pode ser acessada diretamente por outro módulo?

Não é necessário exportá-la por se tratar de um recurso utilizado apenas dentro do arquivo, mas os outros arquivos não têm acesso a ela porque ela não foi exportada.

---

## Exercício 4

Explique com suas palavras a diferença entre:

### `module.exports`

-> Ele é responsável por disponibilizar as funções para os outros arquivos, como uma loja de ferramentas que exibe as ferramentas que podem ser utilizadas.

### `require()`

-> É responsável por colocar aquela função externa dentro do arquivo, como se ele fosse até a loja de ferramentas e escolhesse a ferramenta que irá utilizar naquele arquivo.

Não quero apenas a tradução dos comandos. Explique qual é a responsabilidade de cada um na comunicação entre módulos.
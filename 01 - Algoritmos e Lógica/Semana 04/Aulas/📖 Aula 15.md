# Aula 15 — Modularização

## 🎯 Tema

- O que é modularização e qual problema ela resolve.

---

## 🎯 Objetivos da Aula

Ao final, você deverá conseguir:

- Explicar o que é modularização;
- Entender por que sistemas são divididos em módulos;
- Identificar responsabilidades diferentes dentro de um sistema;
- Diferenciar função de módulo;
- Entender `module.exports` e `require()` no Node.js;
- Separar um pequeno programa JavaScript em arquivos;
- Entender como os módulos trabalham juntos.

---

## O Problema

-> Usando o sistema de produtos que criei na aula anterior, vamos imaginar que ele continue crescendo.

Hoje ele está separado em funções, mais ou menos assim:

```javascript
const prompt = require("prompt-sync")();

const produtos = [];

function cadastrarProduto() {
    // ...
}

function salvarProduto() {
    // ...
}

function listarProdutos() {
    // ...
}

function menu() {
    // ...
}
```

Mas agora precisamos implementar mais funcionalidades:

```text
cadastrarProduto()
editarProduto()
excluirProduto()
listarProdutos()
buscarProduto()
validarProduto()

cadastrarUsuario()
editarUsuario()
excluirUsuario()
listarUsuarios()
validarUsuario()

realizarVenda()
cancelarVenda()
listarVendas()
calcularTotal()

mostrarMenu()
encerrarSistema()
```

Podemos continuar implementando tudo isso no mesmo arquivo?

A resposta é: claro que podemos, mas provavelmente não é a melhor opção.

Imagine encontrar um erro em `cancelarVenda()` dentro de um arquivo com 2.000 linhas.

Ou imagine uma equipe de desenvolvedores trabalhando no mesmo arquivo.

Isso pode virar uma bagunça e dificultar muito o entendimento e a manutenção do sistema.

É aí que surge a **modularização**.

---

## O que é Modularização?

-> Modularização é a prática de dividir um sistema em partes menores e organizadas, chamadas **módulos**, de acordo com suas responsabilidades.

Em vez de termos apenas:

```text
sistema.js
```

Podemos criar uma estrutura assim:

```text
sistema/
│
├── app.js
├── produtos.js
├── usuarios.js
└── vendas.js
```

Cada arquivo possui sua própria responsabilidade:

```text
produtos.js
→ funcionalidades relacionadas aos produtos

usuarios.js
→ funcionalidades relacionadas aos usuários

vendas.js
→ funcionalidades relacionadas às vendas

app.js
→ integra e executa o sistema
```

---

## 🧠 Analogia

Pense em uma empresa.

Uma empresa não costuma ter:

> "Um departamento que faz absolutamente tudo."

Ela possui setores:

```text
Empresa
│
├── Financeiro
├── Recursos Humanos
├── Comercial
└── Tecnologia
```

Todos fazem parte da mesma empresa, mas cada setor possui uma responsabilidade específica.

Um sistema modularizado segue uma ideia parecida:

```text
Sistema
│
├── Usuários
├── Produtos
└── Vendas
```

Existe comunicação entre essas partes quando necessário.

---

## Função ≠ Módulo

Essa diferença é muito importante.

Nas aulas anteriores aprendemos a criar funções:

```javascript
function cadastrarProduto() {

}

function listarProdutos() {

}
```

As funções dividem tarefas.

Um **módulo** pode agrupar várias funções relacionadas.

Por exemplo, no arquivo:

```text
produtos.js
```

Podemos ter:

```javascript
function cadastrarProduto() {

}

function listarProdutos() {

}

function excluirProduto() {

}
```

As três funções possuem algo em comum:

> Todas trabalham com produtos.

Então podemos agrupá-las dentro do mesmo módulo.

Podemos pensar assim:

```text
Sistema
   ↓
Módulos
   ↓
Funções
   ↓
Instruções
```

---

## Separando Nosso Sistema

Vamos utilizar um pequeno exemplo.

### `app.js`

```javascript
function cadastrarProduto(nome) {
    console.log(`Produto ${nome} cadastrado.`);
}

function listarProdutos() {
    console.log("Listando produtos...");
}

cadastrarProduto("Notebook");

listarProdutos();
```

Tudo está no mesmo arquivo.

Agora vamos separar essas responsabilidades.

---

## Criando um Módulo

Vamos criar:

```text
produtos.js
```

E colocar nele todas as funções relacionadas aos produtos:

```javascript
function cadastrarProduto(nome) {
    console.log(`Produto ${nome} cadastrado.`);
}

function listarProdutos() {
    console.log("Listando produtos...");
}
```

Agora temos:

```text
projeto/
│
├── app.js
└── produtos.js
```

Só que apareceu um problema.

O `app.js` precisa utilizar funções que estão em outro arquivo.

Como fazemos isso?

---

## Exportando

No Node.js, utilizando o sistema **CommonJS**, que você já encontra quando escreve:

```javascript
const prompt = require("prompt-sync")();
```

podemos exportar funcionalidades utilizando:

```javascript
module.exports
```

Então nosso `produtos.js` pode ficar assim:

```javascript
function cadastrarProduto(nome) {
    console.log(`Produto ${nome} cadastrado.`);
}

function listarProdutos() {
    console.log("Listando produtos...");
}

module.exports = {
    cadastrarProduto,
    listarProdutos
};
```

A parte nova é:

```javascript
module.exports = {
    cadastrarProduto,
    listarProdutos
};
```

O que ela diz?

-> Estas são as funcionalidades deste módulo que outros arquivos poderão utilizar.

---

## Importando

Agora podemos voltar para:

```text
app.js
```

E escrever:

```javascript
const produtos = require("./produtos");
```

Observe:

```javascript
require("./produtos")
```

Você já conhecia `require()` por causa de:

```javascript
require("prompt-sync")
```

Agora estamos utilizando a mesma ideia para carregar um módulo criado por nós.

---

## Utilizando o Módulo

Como colocamos o módulo dentro da variável:

```javascript
const produtos = require("./produtos");
```

podemos fazer:

```javascript
produtos.cadastrarProduto("Notebook");

produtos.listarProdutos();
```

Nosso `app.js` completo seria:

```javascript
const produtos = require("./produtos");

produtos.cadastrarProduto("Notebook");

produtos.listarProdutos();
```

E nosso projeto:

```text
projeto/
│
├── app.js
└── produtos.js
```

Agora cada arquivo possui uma responsabilidade mais clara.

---

## O Fluxo Agora

Antes tínhamos:

```text
app.js
   ↓
função
   ↓
resultado
```

Agora podemos ter:

```text
app.js
   |
   | require()
   ↓
produtos.js
   |
   | cadastrarProduto()
   ↓
executa a função
   |
   ↓
retorna para app.js
```

O programa continua sendo um único sistema.

Nós apenas organizamos suas responsabilidades em lugares diferentes.

---

## `require()` e `module.exports`

Essa relação é fundamental.

Pense assim:

```text
produtos.js

module.exports
      |
      ↓
"O que eu disponibilizo?"
```

Enquanto:

```text
app.js

require()
   |
   ↓
"O que eu quero utilizar?"
```

Ou, utilizando nossa analogia da empresa:

```text
Departamento de Produtos
        ↓
oferece serviços
        ↓
Sistema principal solicita esses serviços
```

---

## Nem Toda Função Precisa Ser Exportada

Esse detalhe conecta diretamente **Modularização + Escopo**.

Imagine:

```javascript
function validarProduto(nome) {
    return nome !== "";
}

function cadastrarProduto(nome) {
    if (validarProduto(nome)) {
        console.log("Produto cadastrado.");
    }
}

module.exports = {
    cadastrarProduto
};
```

Temos duas funções:

```text
validarProduto()

cadastrarProduto()
```

Mas exportamos apenas:

```text
cadastrarProduto()
```

Por quê?

Porque talvez `validarProduto()` seja apenas uma ferramenta interna daquele módulo.

Outras partes do sistema não precisam conhecê-la.

Isso nos dá uma ideia muito importante:

> Um módulo não precisa expor tudo o que existe dentro dele.

Ele pode disponibilizar somente aquilo que outras partes do sistema realmente precisam utilizar.

---

## Modularizar Não Significa "Um Arquivo por Função"

Cuidado com esse erro.

Não queremos necessariamente:

```text
cadastrarProduto.js
listarProduto.js
excluirProduto.js
editarProduto.js
```

só porque aprendemos modularização.

O objetivo não é criar o maior número possível de arquivos.

O objetivo é:

> Agrupar responsabilidades relacionadas de maneira organizada.

Por isso, dependendo do tamanho do sistema, poderia fazer sentido:

```text
produtos.js
usuarios.js
vendas.js
```

---

## Aplicando ao Navalhou

-> Utilizo muito esse método de modularização no Navalhou, onde fica clara a separação por responsabilidades, o que me ajuda a entender melhor a problemática e o sistema que estou construindo.

Utilizo uma arquitetura em camadas para separar as responsabilidades e criar um sistema mais sólido e durável.

Um exemplo é a estrutura de autenticação e segurança implementada com JWT, que foi construída separando diferentes responsabilidades da aplicação.

---

## 📌 Resumo da Aula

Guarde principalmente esta sequência:

```text
Função
→ separa uma tarefa ou responsabilidade específica.

Módulo
→ agrupa funcionalidades relacionadas.

module.exports
→ define o que um módulo disponibiliza.

require()
→ permite utilizar outro módulo.
```

E a ideia mais importante:

> **Modularizar não é simplesmente dividir código em arquivos. É dividir o sistema de acordo com suas responsabilidades.**

---
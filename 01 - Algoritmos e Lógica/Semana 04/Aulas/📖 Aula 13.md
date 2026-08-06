# Aula 14 — Funções

---

# 🎯 Tema

-> Funções

---

# 📖 Objetivos da Aula

Ao final desta aula serei capaz de:

- Entender o que é uma função;
- Compreender por que funções existem;
- Saber identificar quando criar uma função;
- Declarar e chamar funções em JavaScript;
- Reutilizar código;
- Escrever algoritmos mais organizados.

---

# 🧠 O problema de não utilizar funções

Imagine este código:

```javascript
console.log("Bem-vindo ao sistema");

console.log("Informe seu nome");

console.log("Informe sua senha");

// ...

console.log("Bem-vindo ao sistema");

console.log("Informe seu nome");

console.log("Informe sua senha");

// ...

console.log("Bem-vindo ao sistema");

console.log("Informe seu nome");

console.log("Informe sua senha");
```

Ele funciona? **Sim**, mas olha como as informações são repetitivas.

Repetimos o mesmo bloco de código várias vezes, e isso é um problema.

Se amanhã precisarmos alterar uma mensagem, teremos que repetir esse processo em todos os blocos, um por um. Fora que isso deixa o código muito extenso e difícil de dar manutenção. É bem mais fácil dar manutenção em um código limpo de 500 linhas do que em um mal estruturado com 3000. Ser programador não é escrever menos código, mas escrever código que seja mais simples de entender, reutilizar e manter.

---

# 🧩 O que é uma Função?

-> Uma função é um bloco de código que tem uma responsabilidade específica e pode ser executado sempre que necessário.

Basicamente, é um agrupamento de instruções que tem uma tarefa específica e podemos reutilizá-las sempre que precisarmos.

---

# 🧠 Analogia

A função é algo reutilizável, onde basta colocar os ingredientes (parâmetros) e ela vai te entregar tudo processado (retorno).

### O liquidificador (Entrada e Saída de Funções)

**Entrada (Parâmetros):** Você coloca as frutas picadas e o leite dentro do copo.

**Processo (Corpo da função):** O motor gira as lâminas e mistura tudo.

**Saída (Retorno):** O copo entrega uma vitamina pronta.

-> Você não precisa saber como o motor funciona por dentro para usá-lo; você só coloca os ingredientes e recebe o resultado.

---

# 🏗️ Estrutura de uma Função

Em JavaScript:

```javascript
function saudacao() {

    console.log("Olá!");

}
```

Aqui temos:

- `function`: palavra reservada;
- `saudacao`: nome da função;
- `(){}`: parâmetros e bloco onde o código será executado.

---

# ▶️ Chamando uma função

Criar uma função não significa executá-la.

Observe:

```javascript
function saudacao() {

    console.log("Olá!");

}
```

O que será mostrado?

**Resposta:**

Nada.

Porque apenas declaramos a função.

Para executá-la fazemos:

```javascript
saudacao();
```

Agora a saída será:

```text
Olá!
```

---

# 🔄 Fluxo de Execução

```text
Início
   |
Criar função
   |
Executa?
   |
Não
   |
Continua
```

Quando fazemos a chamada:

```javascript
saudacao();
```

O fluxo muda:

```text
Início
   |
Encontrou chamada
   |
Vai até a função
   |
Executa
   |
Retorna
   |
Continua o algoritmo
```

Perceba que o algoritmo "entra" na função e depois volta exatamente para onde estava.

---

# ♻️ Reutilização

A função nos proporciona o grande benefício de reutilizar determinado bloco de código quantas vezes forem necessárias.

Exemplo:

```javascript
function saudacao() {

    console.log("Olá!");

}
```

Agora:

```javascript
saudacao();

saudacao();

saudacao();
```

Saída:

```text
Olá!

Olá!

Olá!
```

Escrevemos a lógica apenas uma vez.

---

# 📌 Quando criar uma função?

Sempre que perceber:

- código repetido;
- responsabilidade específica;
- tarefa que pode ser reutilizada.

Exemplos:

- calcular média;
- validar login;
- mostrar menu;
- listar produtos;
- consultar livros.

Fiz isso no exercício da biblioteca. O resultado foi um código mais limpo, com funções específicas e reutilizáveis.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- Funções agrupam instruções;
- Possuem uma responsabilidade específica;
- Evitam repetição de código;
- Precisam ser chamadas para executar;
- Tornam os sistemas mais organizados.
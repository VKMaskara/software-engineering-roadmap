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
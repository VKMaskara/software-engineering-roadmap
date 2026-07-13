# 📝 Exercícios Aula 6

## Exercício 1

### Explique com suas palavras:

**O que é Fluxo de Execução?**

**R:**

Fluxo de execução é o caminho que o computador segue para executar o algoritmo. Ele pode ser linear ou pode sofrer mudanças de caminho com estruturas de decisão. Basicamente, é entender qual caminho o computador segue para executar o algoritmo e o porquê.

---

## Exercício 2

Observe o algoritmo:

```javascript
let idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}

console.log("Cadastro concluído");
```

### Responda:

**Qual foi o caminho percorrido pelo algoritmo?**

O caminho executado foi o do bloco `if`, pois a idade é maior que 18.

**O `console.log("Cadastro concluído")` será executado? Por quê?**

Sim. Na verdade, ele será executado independentemente de a condição ser `true` ou `false`, pois se encontra fora do bloco `if`. Isso nos diz que ele não faz parte de um caminho alternativo.

---

## Exercício 3

Analise o algoritmo:

```javascript
let nota = 4;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log("Fim");
```

Descreva o fluxo de execução passo a passo, indicando qual bloco é executado e por que.

```text
Início
  │
  ▼
Declara a variável e recebe a nota
  │
  ▼
Nota é maior ou igual a 7?
  │
  ▼
False
  │
  ▼
Executa o bloco else
  │
  ▼
Mostra "Reprovado"
  │
  ▼
Mostra "Fim"
  │
  ▼
Fim
```
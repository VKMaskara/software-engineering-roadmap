# Aula 07 — Depuração Manual

---

# 🎯 Objetivos da Aula

Ao final da Aula 07 você será capaz de:

- Entender o que é depuração (debug);
- Diferenciar erro de sintaxe, erro de execução e erro de lógica;
- Encontrar erros apenas lendo o algoritmo;
- Utilizar Teste de Mesa e Fluxo de Execução para descobrir bugs;
- Desenvolver o pensamento de um programador ao investigar problemas.

---

# 📖 Introdução

> **"Programar é passar mais tempo procurando erros do que escrevendo código."**

Na aula de hoje temos exatamente esse objetivo: aprender a analisar e encontrar erros. Afinal, saber identificar e corrigir os próprios erros é um diferencial de qualquer programador.

---

# 🧠 O que é Depuração?

Depurar (ou **debugar**) significa:

> Analisar um algoritmo ou programa para encontrar e corrigir erros.

É aqui que entendemos o porquê de o código não estar funcionando.

---

# 🐞 De onde veio o termo "Bug"?

Uma curiosidade interessante.

Na década de 1940, um computador apresentou um defeito.

Ao abrir a máquina, os engenheiros encontraram uma mariposa presa entre os circuitos.

Em inglês, inseto é:

**Bug**

Depois disso, encontrar erros em programas passou a ser chamado de:

**Debugging**

Hoje sabemos que essa história possui algumas simplificações, mas ela ficou famosa e ajuda a lembrar a origem do termo.

---

# 📚 Existem diferentes tipos de erros

Os três principais são:

## 1️⃣ Erro de Sintaxe

Esse erro acontece quando escrevemos algo errado no código.

Exemplo:

```javascript
if (idade >= 18 {

    console.log("Maior")

}
```

Repare que falta um parêntese. Na hora de executar, o código irá falhar. Esse erro normalmente é identificado pelo editor de código.

---

## 2️⃣ Erro de Execução

O programa inicia normalmente.

Mas, durante a execução, acontece um problema.

Exemplo:

```javascript
let numero = 10;

console.log(numero / 0);
```

Ou tentar acessar um arquivo que não existe.

O algoritmo começou corretamente.

Mas falhou durante a execução.

---

## 3️⃣ Erro de Lógica

É o mais perigoso, pois acontece quando a regra de negócio do sistema foi implementada de forma incorreta, geralmente por uma inversão na lógica de quem está programando.

Exemplo:

O programa deveria aprovar alunos com nota maior ou igual a **7**.

Mas alguém escreveu:

```javascript
if (nota >= 5) {
```

O programa executa normalmente.

Só que aprova alunos incorretamente.

---

# 🔎 Como descobrir um erro de lógica?

Nós já aprendemos duas ferramentas importantes.

### Teste de Mesa

Pergunta:

> "Qual era o valor das variáveis?"

### Fluxo de Execução

Pergunta:

> "Qual caminho o algoritmo percorreu?"

Agora juntamos as duas.

Quando um algoritmo não funciona, perguntamos:

- As variáveis tinham os valores esperados?
- O computador percorreu o caminho correto?

Na maioria das vezes, isso já revela o problema.

---

# 🌍 Exemplo

Observe:

```javascript
let idade = 16;

if (idade >= 18) {
    console.log("Pode entrar");
} else {
    console.log("Pode entrar");
}
```

O algoritmo funciona?

**Sim.**

Existe erro?

**Sim.**

Qual?

Independentemente da idade, ele sempre mostra:

> "Pode entrar"

Isso é um erro de lógica.

---

## Outro exemplo

Imagine:

```javascript
let saldo = 100;

saldo = saldo - 50;

saldo = saldo + 20;

console.log(saldo);
```

Se alguém disser:

> "O saldo final deveria ser 90."

Como verificar?

Fazendo um Teste de Mesa.

| Etapa | Saldo |
| ------ | ----: |
| Inicial | 100 |
| Após saque | 50 |
| Após depósito | 70 |

Logo percebemos que o saldo correto é:

**70**

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- Depurar significa encontrar e corrigir erros.
- Existem erros de sintaxe, execução e lógica.
- O Teste de Mesa ajuda a acompanhar os valores das variáveis.
- O Fluxo de Execução ajuda a entender o caminho percorrido pelo algoritmo.
- O melhor programador não é o que menos erra, mas sim o que investiga os erros com método.
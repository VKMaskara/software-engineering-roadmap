# Aula 09 — Conceito de Repetição

---

# 🎯 Objetivo da Aula

Ao final desta aula, você será capaz de:

- Entender por que existem estruturas de repetição;
- Identificar problemas que exigem repetição;
- Compreender o conceito de laço (loop);
- Diferenciar repetição de execução sequencial;
- Preparar a base para aprender `while`, `for` e `do...while`.

-> Vamos entender os fundamentos de loop desde o início.

---

## 📖 Introdução

Até agora, nossos algoritmos sempre seguiram este fluxo:

```text
Início
|
Instrução 1
|
Instrução 2
|
Instrução 3
|
Fim
```

Ou então:

```text
Início
|
Condição?
|               |
Sim           Não
Caminho A    Caminho B
|
Fim
```

-> Mas existe um terceiro tipo de situação muito comum.

---

Imagine que você tenha que imprimir um `console.log` 10 vezes na tela.

Uma primeira solução seria escrever:

```javascript
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
console.log("Olá")
```

Funciona? Sim, porém não é o ideal e é muito trabalhoso. Imagine se fossem 100 `console.log`: como faria?

---

Agora imagine outro problema.

Um professor precisa lançar a nota de 40 alunos.

Será que ele deveria escrever quarenta vezes o mesmo algoritmo?

Claro que não.

Perceba que o problema não muda. A única coisa que muda é a quantidade de vezes que executamos a mesma tarefa.

---

## 🔁 O que é uma Estrutura de Repetição?

Uma estrutura de repetição permite repetir determinada instrução dentro de um bloco várias vezes, sem precisar repetir código.

-> É uma forma de automatizar tarefas repetitivas.

---

## 💡 Uma analogia

Imagine o seu treino de musculação com pesos.

Você pega determinado peso e tem que repetir um movimento várias vezes até completar a série. Isso é uma estrutura de repetição.

- Pegar o peso;
- Levantar;
- Descer;
- Fazer isso 10 vezes;
- Fim.

---

## 🧠 O Conceito de Loop

Chamamos essa repetição de **loop**.

Visualmente:

```text
Executa ação
      |
      v
Ainda precisa repetir?
   |            |
  Sim          Não
   |            |
   v            v
Volta e repete  Fim
```

Enquanto a resposta for **Sim**, o algoritmo continua repetindo.

---

## Quando utilizar repetição?

Sempre que perceber frases como:

- Repetir;
- Enquanto;
- Para cada;
- Até;
- Várias vezes;
- Todos os;
- Cada.

Essas palavras geralmente indicam que uma estrutura de repetição será necessária.

Exemplos:

- Mostrar números de 1 a 100;
- Cadastrar 10 produtos;
- Ler todas as linhas de um arquivo;
- Processar todos os clientes;
- Somar todas as notas de uma turma.

---

## ⏹️ A importância da condição de parada

Uma regra muito importante é colocar uma condição que coloque fim ao loop.

Toda repetição precisa saber:

> Quando ela deve parar?

Sem isso, o algoritmo nunca termina.

Por exemplo, imagine um caixa eletrônico perguntando:

> Deseja realizar outra operação?

Se o cliente responder **SIM**, o sistema continua.

Quando responder **NÃO**, o atendimento termina.

Toda estrutura de repetição funciona dessa maneira.

---

## ⚠️ O perigo do Loop Infinito

Imagine que não colocamos uma condição de parada e o algoritmo fica:

```text
Enquanto verdadeiro
Mostrar "Olá"
```

Quando ele termina?

**Nunca.**

Ele continuará executando para sempre.

Chamamos isso de:

> **Loop Infinito**

É um dos erros mais comuns na programação.

Por isso, sempre devemos pensar:

> Qual será a condição de parada?

---

## 🔗 Ligando com o que já aprendemos

Observe que uma estrutura de repetição depende diretamente dos conceitos vistos anteriormente.

Precisamos de:

- Variáveis;
- Operadores;
- Estruturas de decisão.

Por exemplo:

```text
Enquanto idade < 18
```

Veja quantos conceitos aparecem:

- Variável (`idade`);
- Operador (`<`);
- Condição.

Percebe como tudo está se conectando?

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- Existem tarefas que precisam ser executadas várias vezes.
- Estruturas de repetição evitam escrever código repetido.
- Um loop executa um bloco de instruções repetidamente.
- Toda repetição precisa de uma condição de parada.
- Loops infinitos acontecem quando essa condição nunca é atingida.
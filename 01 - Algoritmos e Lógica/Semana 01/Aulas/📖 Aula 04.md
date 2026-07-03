# Aula 04 — Estruturas de Decisão (if, else e else if)

## 🎯 Tema

**Compreender como um algoritmo toma decisões, escolhendo diferentes caminhos com base em condições.**

---

# 📖 Contexto

Até aqui aprendemos:

### Aula 01

Que um algoritmo é uma sequência lógica de passos para resolver um problema.

### Aula 02

Como armazenamos informações utilizando variáveis.

### Aula 03

Como manipular e comparar essas informações utilizando operadores.

Hoje vamos responder a seguinte pergunta:

> **Como um programa decide o que fazer?**

Imagine que você vá ao banco realizar um saque de **R$ 500**.

Antes de liberar o dinheiro, o sistema verifica:

- Existe saldo suficiente?
- A conta está ativa?
- A senha foi validada?

Dependendo da resposta dessas verificações, o algoritmo seguirá um caminho diferente.

É exatamente isso que estudaremos nesta aula.

---

# 🎯 Objetivos da Aula

Ao final desta aula, você deverá ser capaz de:

- Explicar o conceito de estrutura de decisão;
- Compreender como um algoritmo escolhe caminhos diferentes;
- Diferenciar decisões simples, compostas e encadeadas;
- Entender o funcionamento conceitual do **if**, **else** e **else if**;
- Resolver problemas utilizando lógica de decisão sem depender de uma linguagem de programação.

---

# 🧠 Antes de falar sobre programação...

As estruturas de decisão estão presentes na nossa vida o tempo todo.

Pensar em situações do cotidiano facilita bastante o entendimento.

Imagine que você vai sair de casa.

Antes de sair, olha pela janela para verificar se está chovendo.

Existem apenas duas respostas possíveis:

- Sim;
- Não.

Se estiver chovendo:

→ Você pega um guarda-chuva.

Caso contrário:

→ Você sai normalmente.

Isso já é uma **estrutura de decisão condicional**.

Perceba que existe uma condição e, dependendo do resultado, uma ação diferente será executada.

---

# 🤖 Como o computador faz isso?

O computador trabalha com lógica binária.

Ou seja, para ele só existem dois resultados possíveis:

- Verdadeiro (`true`);
- Falso (`false`).

Não existe meio termo.

Por isso, toda decisão começa com uma condição.

Exemplo:

```text
Idade >= 18
```

Essa comparação retornará apenas um dos dois resultados:

- `true`
- `false`

Com base nesse resultado, o algoritmo decide qual caminho seguir.

---

# 🌍 Exemplo do mundo real

Imagine um sistema de um cinema.

Existe a seguinte regra:

> Apenas pessoas com **16 anos ou mais** podem assistir a determinado filme.

O algoritmo faz a seguinte pergunta:

```text
Idade >= 16?
```

Se o resultado for:

**TRUE**

↓

Acesso permitido.

Caso contrário:

↓

Acesso negado.

Perceba que existem apenas duas possibilidades.

---

## 💻 Em código (JavaScript)

```javascript
let idade = 18;

if (idade >= 16) {
    console.log(`Acesso permitido. Você tem ${idade} anos.`);
} else {
    console.log(`Acesso negado. Você tem ${idade} anos e é menor de 16 anos.`);
}
```

Mesmo sem entender toda a sintaxe, já conseguimos perceber a lógica:

- Se a condição for verdadeira, executa um bloco.
- Caso contrário, executa outro.

---

# 📚 Decisão Simples (if)

Uma decisão simples possui apenas um caminho quando a condição é verdadeira.

Exemplo:

```text
Temperatura > 38°C ?
```

↓

Se **SIM**

↓

Exibir:

```text
"Procure atendimento médico."
```

Caso a condição seja falsa, nenhuma ação será executada.

Existe apenas uma verificação.

---

# 📚 Decisão Composta (if / else)

Agora existem dois caminhos possíveis.

Imagine um caixa eletrônico.

O algoritmo pergunta:

```text
Saldo >= Valor do saque?
```

Se o resultado for:

**true**

↓

Realizar o saque.

Caso contrário:

↓

Exibir:

```text
"Saldo insuficiente."
```

Nesse caso existe:

- **SE** (`if`)
- **SENÃO** (`else`)

Sempre apenas um dos caminhos será executado.

---

# 📚 Decisão Encadeada (if / else if / else)

Agora imagine uma escola.

Precisamos analisar a nota de um aluno.

Regras:

- Nota maior ou igual a **7** → Aprovado;
- Nota entre **5** e **6,9** → Recuperação;
- Nota menor que **5** → Reprovado.

O algoritmo verifica as condições em ordem.

Se a primeira condição não for verdadeira, ele passa para a próxima.

Caso nenhuma seja atendida, executa o último bloco (`else`).

Esse tipo de decisão é chamado de **decisão encadeada**.

---

# 🧠 Pensando como um engenheiro

Antes de escrever um `if`, um engenheiro de software costuma responder quatro perguntas:

### 1.

Qual decisão preciso tomar?

### 2.

Qual condição determina essa decisão?

### 3.

O que acontece se a condição for verdadeira?

### 4.

O que acontece se ela for falsa?

Responder essas perguntas antes de programar facilita bastante a escrita do código e reduz erros.

---

# 💡 Boas práticas

Antes de escrever qualquer código:

1. Escreva a regra de negócio em português;
2. Transforme essa regra em uma condição lógica;
3. Só então implemente a solução na linguagem de programação.

Essa abordagem torna o código mais organizado, reduz erros e ajuda no desenvolvimento do raciocínio lógico.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- Estruturas de decisão permitem que um algoritmo escolha diferentes caminhos;
- Toda decisão começa com uma condição que retorna `true` ou `false`;
- O `if` executa uma ação quando a condição é verdadeira;
- O `else` executa uma ação alternativa;
- O `else if` permite criar várias possibilidades de decisão;
- Pensar primeiro na lógica e depois no código facilita muito o desenvolvimento.

---

# 💭 Conclusão

Tomar decisões é uma das principais funções de qualquer programa.

Sempre que um sistema precisa verificar uma condição antes de executar uma ação, utilizamos estruturas de decisão.

Dominar esse conceito é essencial, pois praticamente todo software utiliza decisões para controlar seu funcionamento.
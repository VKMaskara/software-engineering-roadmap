# Aula 02 — Variáveis e Tipos de Dados

## 🎯 Tema

**Compreender como o computador armazena informações na memória e por que variáveis e tipos de dados são fundamentais para aprender qualquer linguagem de programação.**

---

# 📖 Contexto

Na aula anterior aprendemos que:

> **Um algoritmo é uma sequência lógica de instruções para resolver um problema.**

Agora imagine um exercício simples: calcular a média de um aluno.

Para isso, precisamos armazenar algumas informações, por exemplo:

- Nome
- Nota 1
- Nota 2

Surge então uma pergunta:

> **Onde essas informações ficam enquanto o algoritmo está sendo executado?**

O computador precisa de um lugar para armazená-las temporariamente.

É nesse momento que entram as **variáveis**.

---

# 🎯 Objetivos da Aula

Ao final desta aula, você deverá ser capaz de:

- Explicar o que é uma variável;
- Entender por que as variáveis existem;
- Diferenciar variável de constante;
- Conhecer os principais tipos de dados;
- Escolher o tipo adequado para cada informação.

---

# 🧠 Antes de falarmos de programação...

Antes de entender o conceito de variável, imagine que a memória do computador é como um grande armário.

Dentro desse armário existem várias gavetas, e cada uma possui uma etiqueta indicando o que será armazenado.

Por exemplo:

```text
Porta Principal → Jaquetas
Gaveta 1        → Cuecas
Gaveta 2        → Camisetas
Gaveta 3        → Bermudas
```

Quando você precisa de uma bermuda, não é necessário abrir o guarda-roupa inteiro.

Você vai diretamente até a gaveta identificada.

As variáveis funcionam exatamente assim: são espaços identificados na memória do computador onde informações ficam armazenadas.

---

# 📦 O que é uma variável?

Uma **variável** é um espaço reservado na memória do computador para armazenar um valor que **pode ser alterado** durante a execução de um programa.

Em outras palavras, é como criar uma gaveta na memória para guardar uma informação.

## Dois pontos importantes

### 📍 Espaço na memória

A informação permanece armazenada enquanto o programa está sendo executado.

### 🔄 Pode ser alterado

O valor não é fixo. Ele pode mudar conforme o programa executa.

---

# 📝 Exemplo Prático

## Ficha de Cadastro

```text
Nome: Kauê
Idade: 20
Cidade: São Paulo
```

Observe que **Nome**, **Idade** e **Cidade** são as variáveis.

Os valores podem mudar para qualquer outra pessoa:

```text
Nome: João
Idade: 18
Cidade: Campinas
```

A estrutura continua a mesma; apenas os valores são diferentes.

---

# 💻 Um exemplo em JavaScript

```javascript
let nome = "Kauê";
let idade = 20;
let altura = 1.75;
```

Esse exemplo é simples, mas extremamente importante.

Perceba que:

- Cada variável possui um nome;
- Cada variável armazena um valor;
- Esses valores podem ser utilizados ou alterados durante o programa.

---

# 🔄 Variável × Constante

Embora sejam parecidas, existe uma diferença importante entre elas.

## Variável

É um espaço na memória cujo valor **pode ser alterado** durante a execução do programa.

### Exemplos

- Nome do usuário
- Saldo bancário
- Quantidade em estoque
- Pontuação de um jogo

---

## Constante

É um espaço na memória cujo valor **não pode ser alterado** durante a execução do programa.

### Exemplos

- Valor de π (Pi)
- Número de dias da semana
- Número de meses do ano
- Velocidade da luz (em cálculos científicos)

---

# 📚 Tipos de Dados

O computador precisa saber **que tipo de informação** está armazenando.

Por exemplo, não faz sentido realizar operações matemáticas com um nome.

É por isso que existem os **tipos de dados**.

Os principais são:

| Tipo | Descrição | Exemplos |
|------|-----------|-----------|
| **Integer (Inteiro)** | Armazena números sem casas decimais. | `1`, `10`, `250` |
| **Float / Double (Real)** | Armazena números com casas decimais. | `1.75`, `10.5`, `99.99` |
| **String (Texto)** | Armazena palavras, frases ou caracteres. | `"Kauê"`, `"Brasil"` |
| **Boolean (Booleano)** | Armazena apenas dois valores possíveis. | `true` ou `false` |

---

# 🌍 Exemplos do mundo real

## Cadastro de um aluno

```text
Nome      → String
Idade     → Integer
Altura    → Float
Aprovado  → Boolean
```

---

## Aplicativo bancário

```text
Saldo             → Float
Nome              → String
Número da conta   → Integer
Conta ativa       → Boolean
```

---

# 🧠 Curiosidade

Quando criamos uma variável, o computador reserva um pequeno espaço na memória RAM para armazenar aquele valor.

Quando o programa termina, essa memória normalmente é liberada.

Por isso dizemos que as variáveis **existem durante a execução do programa**.

---

# 💡 Boas Práticas

Ao criar variáveis:

- Utilize nomes claros e objetivos;
- Evite abreviações desnecessárias;
- Mantenha um padrão de escrita (camelCase, por exemplo);
- Escreva pensando que outra pessoa poderá ler o seu código.

> **Experiência pessoal:** essa prática me ajudou bastante a escrever códigos mais organizados, fáceis de entender e de manter. Vale muito a pena adotá-la desde o início.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- Variáveis armazenam informações na memória;
- Constantes armazenam valores que não mudam;
- Todo dado possui um tipo;
- Escolher nomes claros facilita o desenvolvimento;
- O computador precisa saber como cada informação será armazenada para tratá-la corretamente.

---

# 💭 Conclusão

As variáveis são um dos conceitos mais importantes da programação.

Praticamente tudo o que fazemos em um programa envolve armazenar informações, modificá-las e utilizá-las para resolver problemas.

Dominar esse conceito é essencial para aprender qualquer linguagem de programação.
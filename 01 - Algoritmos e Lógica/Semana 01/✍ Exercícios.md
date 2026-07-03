# 📝 Exercícios Aula 1

## Exercício 1

**Com suas palavras, responda:**

**O que é um algoritmo?**

Escreva como se estivesse explicando para alguém que nunca programou.

**R:**

Algoritmo é uma sequência lógica e finita de instruções bem definidas para resolver determinados problemas ou executar uma tarefa.

---

## Exercício 2

**Escreva um algoritmo para escovar os dentes.**

Seja detalhista.

Imagine que quem vai executar é um robô.

**R:**

1. Vá até o banheiro.
2. Pegue a escova de dentes com a mão direita.
3. Pegue a pasta de dentes com a mão esquerda.
4. Coloque um pouco de pasta nas cerdas da escova.
5. Feche a pasta de dentes.
6. Abra a torneira.
7. Molhe a escova.
8. Feche a torneira.
9. Escove os dentes com movimentos circulares.
10. Abra a torneira novamente.
11. Enxágue a boca e a escova.
12. Feche a torneira.

---

## Exercício 3

**Escreva um algoritmo para preparar um miojo.**

Não pule etapas.

**R:**

1. Pegue uma panela.
2. Abra a torneira.
3. Coloque aproximadamente 500 ml de água na panela.
4. Feche a torneira.
5. Coloque a panela sobre uma das bocas do fogão.
6. Ligue o fogo.
7. Aguarde a água ferver.
8. Enquanto espera, vá até a despensa.
9. Abra a porta.
10. Pegue o pacote de miojo.
11. Feche a porta.
12. Abra o pacote e coloque o macarrão na panela sem quebrá-lo.
13. Aguarde o cozimento, mexendo de vez em quando para que o macarrão fique soltinho.
14. Adicione o tempero.
15. Misture bem.
16. Desligue o fogo.
17. Sirva o miojo.

---

## Exercício 4

Para cada situação abaixo, identifique:

* Entrada
* Processamento
* Saída

### a) Calcular a idade de uma pessoa

* **Entrada:** Digitar a data de nascimento.
* **Processamento:** Calcular a idade.
* **Saída:** Mostrar a idade.

### b) Comprar um ingresso online

* **Entrada:** Fazer login e selecionar o ingresso.
* **Processamento:** Validar o pagamento e gerar a compra.
* **Saída:** Exibir o ingresso.

### c) Fazer login em um site

* **Entrada:** Digitar usuário e senha.
* **Processamento:** Verificar e validar os dados.
* **Saída:** Permitir o acesso ao sistema.

---

# 📝 Exercícios Aula 2

## Exercício 1

**Explique, com suas próprias palavras:**

**O que é uma variável?**

**R:**

Variáveis são espaços na memória, identificados por um nome, onde o computador consegue armazenar informações que podem ser alteradas ao longo da execução do programa.

É como criar uma gaveta na memória para guardar uma informação.

Além de receber um nome (que funciona como uma etiqueta de identificação), toda variável também possui um tipo de dado, como **Integer**, **Float**, **String** ou **Boolean**.

---

## Exercício 2

**Qual é a diferença entre variável e constante?**

### Variáveis

Podem mudar de valor durante a execução do programa ou de acordo com as ações do usuário.

Um bom exemplo é um formulário de cadastro: as variáveis continuam sendo as mesmas, mas as informações mudam conforme a pessoa que está preenchendo.

### Constantes

Também são espaços na memória, porém armazenam informações que não podem (ou não precisam) ser alteradas durante a execução do programa.

Um exemplo clássico é o valor de **π (Pi)**.

---

## Exercício 3

**Classifique o tipo de dado de cada informação.**

| Variável          | Tipo    | Variável ou Constante? |
| ----------------- | ------- |------------------------|
| Nome              | String  |   Variável             |
| CPF               | String  |   Variável             |
| Idade             | Integer |   Variável             |
| Altura            | Float   |   Variável             |
| Salário           | Float   |   Variável             |
| Está matriculado? | Boolean |   Variável             |
| Nota final        | Float   |   Variável             |

> **Observação:** Embora o CPF seja composto apenas por números, normalmente ele é armazenado como **String**, pois não é utilizado em cálculos e pode conter zeros à esquerda.

---

## Exercício 4

**Imagine um sistema para uma academia.**

Liste 10 variáveis que esse sistema poderia armazenar e indique o tipo de dado de cada uma.

| Variável                     | Tipo    | Variável ou Constante? |
| ---------------------------- | ------- |------------------------|
| Nome                         | String  |   Variável             |
| CPF                          | String  |   Variável             |
| Idade                        | Integer |   Variável             |
| Altura                       | Float   |   Variável             |
| Peso                         | Float   |   Variável             |
| IMC                          | Float   |   Variável             |
| Objetivo                     | String  |   Variável             |
| Possui doença?               | Boolean |   Variável             |
| Quantidade de dias de treino | Integer |   Variável             |
| Já treinou anteriormente?    | Boolean |   Variável             |

---

# 📝 Exercícios Aula 3

## Exercício 1

**Explique com suas palavras:**

**O que é um operador?**

**R:**

Operador é um símbolo utilizado para manipular, comparar ou calcular dados. Sua principal função é realizar uma operação sobre um ou mais valores, que são chamados de **operandos**.

---

## Exercício 2

**Resolva as expressões.**

### a) `10 + 5 × 2 = 20`

Resolvendo pela ordem de precedência:

```text
5 × 2 = 10
10 + 10 = 20
```

**Resultado:** `20`

---

### b) `(10 + 5) × 2 = 30`

Primeiro resolvemos o que está entre parênteses:

```text
10 + 5 = 15
15 × 2 = 30
```

**Resultado:** `30`

---

### c) `18 % 4 = 2`

O operador `%` retorna o resto da divisão.

```text
18 ÷ 4 = 4 (resto 2)

4 × 4 = 16
18 - 16 = 2
```

**Resultado:** `2`

---

### d) `20 / 5 + 3 = 7`

Primeiro realizamos a divisão:

```text
20 ÷ 5 = 4
4 + 3 = 7
```

**Resultado:** `7`

---

## Exercício 3

**Determine se o resultado é `true` ou `false`.**

### a)

```text
20 > 15
```

**Resposta:** `true`

---

### b)

```text
10 == 12
```

**Resposta:** `false`

---

### c)

```text
15 != 15
```

**Resposta:** `false`

---

### d)

```text
30 <= 40
```

**Resposta:** `true`

---

### e)

```text
18 >= 20
```

**Resposta:** `false`

---




## Exercício 4

**Analise as situações abaixo.**

Explique qual operador lógico seria utilizado e por quê.

### a)

**Um usuário só pode acessar o sistema se estiver logado e possuir permissão de administrador.**

**Resposta:**

Nesse caso, utilizaria o operador **AND (`&&`)**, pois as duas condições precisam ser verdadeiras ao mesmo tempo.

```javascript
estaLogado && temPermissao
```

---

### b)

**Um cliente pode obter desconto se possuir cupom ou for cliente premium.**

**Resposta:**

Nesse caso, utilizaria o operador **OR (`||`)**, pois basta uma das condições ser verdadeira para que o desconto seja concedido.

```javascript
temCupom || ehPremium
```

---

### c)

**Um sistema verifica se um usuário não está bloqueado.**

**Resposta:**

Nesse caso, utilizaria o operador **NOT (`!`)**, pois ele inverte o valor lógico. Assim, se o usuário estiver bloqueado (`true`), o resultado será `false`, e vice-versa.

```javascript
!usuarioBloqueado
```


---
# 📝 Exercícios Aula 4


## Exercício 1

### Explique, com suas próprias palavras:

**O que é uma estrutura de decisão?**

**R:**

Uma estrutura de decisão é um conjunto de condições que altera o caminho que o nosso código irá seguir. Com base no resultado dessas condições, o algoritmo executa uma ação previamente definida.

**Exemplo:**

Está frio?

- Se **frio = true** → Vestir um casaco.
- Se **false** → Sair normalmente.

---

## Exercício 2

Para cada situação abaixo, responda:

- Qual é a condição?
- O que acontece se ela for verdadeira?
- O que acontece se ela for falsa?

### a) Entrar em um cinema para maiores de 16 anos

**Condição:** `Idade >= 16`

**Se verdadeira:** Acesso liberado.

**Se falsa:** Acesso restrito, pois não atende à idade mínima.

---

### b) Realizar um saque bancário

**Condição:** `Saldo >= Valor do saque`

**Se verdadeira:** Saque realizado com sucesso.

**Se falsa:** Exibir a mensagem **"Saldo insuficiente."**

---

### c) Liberar a entrada na academia

**Condição:** `Mensalidade paga && Cadastro ativo`

**Se verdadeira:** Entrada liberada.

**Se falsa:** Entrada negada.

---

## Exercício 3

### Classifique cada situação como:

- Decisão simples;
- Decisão composta;
- Decisão encadeada.

Justifique sua resposta.

### Mostrar uma mensagem apenas se a temperatura estiver acima de 38°C.

**Resposta:**

Decisão simples, pois a mensagem será exibida apenas quando a condição for verdadeira.

---

### Verificar se há saldo suficiente para um saque; caso contrário, informar saldo insuficiente.

**Resposta:**

Decisão composta, pois existem dois caminhos possíveis: realizar o saque quando a condição for verdadeira ou informar saldo insuficiente quando for falsa.

---

### Classificar um aluno como aprovado, em recuperação ou reprovado conforme a nota.

**Resposta:**

Decisão encadeada, pois é necessário realizar mais de uma verificação até encontrar a condição correspondente ao resultado do aluno.

---

## Exercício 4

Imagine um sistema de biblioteca.

Liste cinco decisões que esse sistema precisa tomar durante o funcionamento.

Para cada uma, descreva:

- A condição;
- O que acontece se for verdadeira;
- O que acontece se for falsa.

### 1. Cadastro do leitor

**Condição:** O leitor possui cadastro?

**Se verdadeira:** Pode pegar livros emprestados.

**Se falsa:** Precisa realizar o cadastro.

---

### 2. Disponibilidade do livro

**Condição:** O livro está disponível?

**Se verdadeira:** O sistema informa sua localização e permite o empréstimo.

**Se falsa:** O sistema informa que o livro está emprestado no momento.

---

### 3. Prazo de devolução

**Condição:** O leitor cumpriu o prazo de devolução?

**Se verdadeira:** Não recebe penalidade e pode realizar novos empréstimos.

**Se falsa:** Recebe uma penalidade e ficará um dia sem poder retirar livros.

---

### 4. Cadastro de livros

**Condição:** O usuário é administrador?

**Se verdadeira:** Pode cadastrar novos livros.

**Se falsa:** O acesso é permitido apenas para administradores.

---

### 5. Quantidade de livros por pessoa

**Condição:** O usuário é professor?

**Se verdadeira:** Pode pegar até **3 livros**.

**Se falsa:** Pode pegar até **2 livros**.


# Aula 5
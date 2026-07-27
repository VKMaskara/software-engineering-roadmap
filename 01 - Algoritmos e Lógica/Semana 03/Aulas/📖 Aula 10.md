# Aula 10 - `while`

---

# 🎯 Tema

-> Estrutura de repetição `while`

Vamos ver a primeira estrutura de repetição.

---

# 📖 Objetivos da Aula

Ao final da aula, serei capaz de:

- Entender como funciona o `while`;
- Identificar seus três elementos fundamentais:
  - Condição;
  - Bloco de repetição;
  - Atualização da condição;
- Saber quando utilizar `while`;
- Evitar loops infinitos;
- Fazer Teste de Mesa em algoritmos com `while`.

---

# 🧠 O que é o `while`?

O `while` é uma estrutura de repetição que significa:

> Enquanto uma condição for verdadeira, execute esse bloco de código.

Basicamente, ele vai repetir uma instrução enquanto a condição for verdadeira.

```text
Enquanto (condição)
    execute
```

---

## Estrutura

A estrutura é bem simples:

```javascript
while (condição) {
    // código
}
```

Ela é composta por três partes importantes.

### 1. Condição

É a condição que limita o nosso loop. Toda vez que for repetir o código, o computador pergunta se a condição é verdadeira ou não.

Exemplo:

```javascript
contador <= 10
```

---

### 2. Bloco de repetição

É a instrução que vai ser executada enquanto a condição for verdadeira.

```javascript
console.log(contador)
```

---

### 3. Atualização

Ao final da estrutura de repetição, precisamos atualizar a variável `contador`.

Isso atualiza o contador para chegar ao limite da condição e evitar um loop infinito.

Exemplo:

```javascript
contador++
```

---

## Exemplo

```javascript
let contador = 1

while (contador <= 5) {
    console.log(contador)

    contador++
}
```

A variável inicia com o valor 1 e faz a primeira verificação:

```text
1 <= 5 = true
```

Então, ela executa o bloco de código e faz isso até chegar ao valor 6, que não passa pela condição.

---

# Fluxo de Execução

```text
Início
   |
   v
contador = 1
   |
   v
contador <= 5 ?
   |
Sim ----------------------+
 |                        |
 v                        |
Mostrar contador          |
 |                        |
 v                        |
contador++                |
 |                        |
 +------------------------+
 |
Não
 |
 v
Fim
```

Assim, temos um algoritmo que volta para uma etapa e a repete enquanto a condição for verdadeira.

Essa é a diferença entre uma estrutura sequencial e uma estrutura de repetição.

---

## O erro mais comum

Se liga no algoritmo:

```javascript
let contador = 1

while (contador <= 5) {

    console.log(contador)

}
```

Nota-se a falta da atualização do contador, criando assim um loop infinito, pois o contador continua sendo eternamente 1, sendo ele menor que 5.

Resultado:

```text
1
1
1
1
1
1
1
...
```

---

## Quando usar `while`?

O `while` é ideal quando não sabemos exatamente quantas vezes o algoritmo será repetido.

Por exemplo:

- Caixa eletrônico;
- Login;
- Menu de um sistema;
- Perguntar se deseja continuar;
- Ler dados até o usuário encerrar.

Nesses casos, quem decide quando parar é o usuário ou alguma condição externa.

Eu usei muito ele em situações em que a escolha dependia do usuário continuar ou não.

---

## Boas práticas

Sempre pergunte:

- Qual variável controla o loop?
- Quem altera essa variável?
- Quando o loop termina?

Se você não conseguir responder essas três perguntas, provavelmente existe um erro no algoritmo.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- `while` significa "enquanto";
- O bloco é executado enquanto a condição for verdadeira;
- Todo `while` precisa de uma condição de parada;
- Normalmente existe uma variável de controle;
- Esquecer de atualizar essa variável gera um loop infinito.
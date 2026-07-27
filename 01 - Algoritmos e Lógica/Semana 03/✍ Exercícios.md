# 📝 Exercícios da Aula 09

## Exercício 1

**Explique com suas palavras:**

**O que é uma estrutura de repetição?**

-> É uma estrutura que permite executar determinada instrução em um bloco de código várias vezes. Exemplo: um contador de páginas enquanto folheia um livro. Não precisamos imprimir um por um, basta criar um loop que mostra e faz a contagem.

---

## Exercício 2

**Para cada situação abaixo, responda se você utilizaria uma repetição e justifique.**

**Mostrar os números de 1 até 50.**

-> Sim, pois eu vou repetir a mesma instrução de 1 até 50, que é o parâmetro de fim.

**Calcular a média de uma única pessoa.**

-> Não, para uma única pessoa não preciso criar uma repetição.

**Ler as notas de todos os alunos de uma turma.**

-> Sim, pois eu vou repetir a mesma instrução enquanto houver alunos para ler as notas.

**Mostrar uma mensagem apenas uma vez ao abrir o sistema.**

-> Não, para uma única mensagem não preciso criar uma repetição.

---

## Exercício 3

**Identifique qual seria a condição de parada em cada situação.**

**Encher uma caixa com 20 produtos.**

Se a caixa for menor ou igual a 20, `caixa++`.

```javascript
let caixa = 0

for (caixa >= 20) {
    caixa++
    console.log(caixa)
}
```

**Contar de 1 até 100.**

Se o contador for menor ou igual a 100, `contador++`.

```javascript
let contador = 0

for (contador >= 100) {
    contador++
    console.log(contador)
}
```

**Perguntar ao usuário se deseja continuar.**

Enquanto for `true`, executar novamente.

```javascript
while (true) {

    let resposta = prompt("Deseja continuar?: ");

    if (resposta == "N") {
        alert("Finalizado!");
        break; // Sai do loop imediatamente
    }

    alert("Novamente.");

}
```

# 📝 Exercícios da Aula 10

## Exercício 1

**Explique com suas palavras:**

**O que é o `while`?**

- O `while` é uma estrutura de repetição que diz: enquanto a condição for verdadeira, execute essa instrução.

---

## Exercício 2

Observe o algoritmo:

```javascript
let contador = 1

while (contador <= 4) {

    console.log(contador)

    contador++
}
```

**Responda:**

**Qual é a condição?**

Enquanto o contador for menor ou igual a 4.

**Qual variável controla o loop?**

`contador`

**Qual será a saída?**

```text
1
2
3
4
```

**Em que momento o laço termina?**

Quando `contador++` faz o contador valer 5, ele não passa mais na condição.

---

## Exercício 3

**Faça o Teste de Mesa do algoritmo abaixo.**

```javascript
let numero = 3

while (numero <= 6) {

    console.log(numero)

    numero++
}
```

**Monte uma tabela mostrando o valor da variável a cada repetição.**

| Repetição | Valor de `numero` |
| ---------- | ----------------- |
| 1ª         | 3                 |
| 2ª         | 4                 |
| 3ª         | 5                 |
| 4ª         | 6                 |
| 5ª         | 7 *(termina aqui, pois não passa na condição)* |

---

## Exercício 4

**Analise o algoritmo.**

```javascript
let idade = 15

while (idade < 18) {

    console.log("Menor de idade")
}
```

**Responda:**

**Existe algum erro?**

Sim, um erro lógico.

**Qual?**

A variável `idade` não é atualizada no final do bloco, gerando um loop infinito.

**Como ele poderia ser corrigido?**

```javascript
let idade = 15

while (idade < 18) {

    console.log("Menor de idade")

    idade++
}
```

**Classifique o tipo de erro.**

Lógico.


# proxima
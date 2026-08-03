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

# 📝 Exercícios da Aula 11
Exercício 1

Explique com suas palavras:

O que é a estrutura for?

For é uma estrutura de repetição que memso parecida com o while tem como a principal diferença a organização na hora de escrever a estrutura e utilisamos mais quando sabemos exatamente quantas vezes precisa se repetir

Para cada repetição, execute este bloco de código até quando a condição não for mais verdade 

Exercício 2

Observe o algoritmo:

for (let contador = 1; contador <= 4; contador++){

    console.log(contador)

}

Responda:

Qual é a variável de controle?
contador
Qual é a condição?
contador <= 4
Qual é a atualização?
contador++
Qual será a saída?
1
2
3
4

Exercício 3

Faça o Teste de Mesa.

for (let numero = 2; numero <= 5; numero++){

    console.log(numero)

}

Monte uma tabela mostrando o valor da variável em cada repetição.

| Repetição | Valor de `numero` |
| ---------- | ----------------- |
| 1ª         | 2                 |
| 2ª         | 3                 |
| 3ª         | 4                 |
| 4ª         | 5                 |
| 5ª         | 6 *(termina aqui, pois não passa na condição)* |


Exercício 4

Analise o algoritmo.

for (let i = 5; i <= 10; i--){

    console.log(i)

}

Responda:

Existe algum erro?
 Sim 
Qual?
 A loop se torna infinito pois a condição se atualiza de maneira errada
Classifique o tipo de erro.
Lógico -> Não segue a regra de negócio

Como ele poderia ser corrigido?

no lugar de i-- colocar i ++

# 📝 Exercícios da Aula 12

## Exercício 1

**Explique com suas palavras:**

**O que é o `do...while`?**

-> Uma estrutura de repetição que primeiro executa o código e depois faz a verificação para uma nova repetição, permitindo que o bloco seja executado pelo menos uma vez, mesmo que a condição inicial seja falsa.

---

## Exercício 2

Observe o algoritmo:

```javascript
let contador = 1;

do {

    console.log(contador);

    contador++;

} while (contador <= 3);
```

**Responda:**

**Qual é a condição?**

`contador <= 3`

**Qual variável controla o laço?**

`contador`

**Qual será a saída?**

```text
1
2
3
```

**Em que momento o laço termina?**

Quando o contador guardar o valor 4 e a condição se tornar falsa.

---

## Exercício 3

**Faça o Teste de Mesa.**

```javascript
let numero = 5;

do {

    console.log(numero);

    numero--;

} while (numero >= 2);
```

**Monte uma tabela mostrando o valor da variável a cada repetição.**

| Repetição | Valor de `numero` |
| ---------- | ----------------- |
| 1ª         | 5                 |
| 2ª         | 4                 |
| 3ª         | 3                 |
| 4ª         | 2                 |
| 5ª         | 1 *(termina aqui, pois não passa na condição)* |

---

## Exercício 4

**Analise os dois algoritmos.**

### Algoritmo A

```javascript
let valor = 10;

while (valor < 5) {
    console.log(valor);
}
```

### Algoritmo B

```javascript
let valor = 10;

do {
    console.log(valor);
} while (valor < 5);
```

**Responda:**

**Qual deles exibirá algum valor?**

Apenas o **B**.

**Explique por quê.**

Isso acontece porque a condição é falsa e apenas o `do...while` permite pelo menos uma execução, independentemente de a condição ser verdadeira ou não.

**Qual estrutura seria mais adequada para um menu de sistema?**

`do...while`

# proxima
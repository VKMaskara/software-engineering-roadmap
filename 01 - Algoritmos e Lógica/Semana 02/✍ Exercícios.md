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

---
# 📝 Exercícios Aula 7

## Exercício 1

Explique com suas palavras:

**O que é depuração (debug)?**

-> Analisar o código procurando e corrigindo erros utilizando o Teste de Mesa e o Fluxo de Execução.

---

## Exercício 2

Classifique o tipo de erro em cada situação e justifique sua resposta.

### a)

```javascript
if (idade >= 18 {

    console.log("Maior de idade")

}
```

R: Erro de sintaxe.

### b)

```javascript
let nota = 8

if (nota >= 5){
    console.log("Aprovado")
}
```

Sabendo que a regra correta era aprovar apenas notas maiores ou iguais a 7.

R: Erro de lógica, pois ele não segue a regra de negócio.

### c)

```javascript
let numero = 10

console.log(numero / 0)
```

R: Erro de execução.

---

## Exercício 3

Observe o algoritmo:

```javascript
let saldo = 200

saldo = saldo - 50

saldo = saldo + 30

console.log(saldo)
```

Um usuário afirmou que o saldo final deveria ser 180.

Utilize o método de depuração aprendido hoje para responder:

**Qual era o objetivo do algoritmo?**

-> Fazer o cálculo de saque e depósito do saldo.

**Faça um Teste de Mesa.**

**O algoritmo está correto ou o usuário está equivocado? Justifique.**

-> O algoritmo dá exatamente o resultado de 180.
# 📝 Exercícios Aula 8

## Exercício 1

Leia a situação abaixo.

Um sistema de estacionamento possui as seguintes regras:

- O veículo deve estar cadastrado.
- O pagamento deve estar em dia.
- Deve existir vaga disponível.

Responda:

### a) Quais variáveis seriam necessárias?

```javascript
let veiculoCadastrado = "Palio"
let pagamento_ok = true
let vagaDisponivel = true
```

### b) Quais seriam seus tipos de dados?

- veiculoCadastrado → String
- pagamento_ok → Booleano
- vagaDisponivel → Booleano

### c) Qual operador lógico utilizaria para liberar a entrada?

Operador lógico **AND**, pois todas as afirmações precisam ser verdadeiras.

```javascript
if (veiculoCadastrado == "Palio" && pagamento_ok && vagaDisponivel){
    console.log("Liberado")
}else{
    console.log("Restrito")
}
```

---

## Exercício 2

Observe o algoritmo:

```javascript
let temperatura = 32
let arCondicionado = true

if (temperatura > 30 && arCondicionado){
    console.log("Ambiente confortável")
}else{
    console.log("Ambiente quente")
}
```

Responda:

### Faça o Teste de Mesa.

Qual caminho foi percorrido?

Início

↓  
Declara as variáveis

↓  
Executa a condição `&&`

↓  
Ambas verdadeiras

↓  
Executa o bloco do `if`

↓  
Fim

### Qual será a saída?

Ambiente confortável.

### Existe algum erro de lógica?

O ar-condicionado está ligado e o ambiente ainda está acima de 30 graus, então ainda estaria quente.

Outra possibilidade seria: se a temperatura estivesse menor que 30, o ambiente estaria confortável, mas o algoritmo executaria **"Ambiente quente"**.

---

## Exercício 3

Analise o algoritmo:

```javascript
let idade = 17
let autorizado = true

if (idade >= 18 && autorizado){
    console.log("Entrada permitida")
}else{
    console.log("Entrada negada")
}

console.log("Sistema finalizado")
```

Responda:

### Faça o Fluxo de Execução.

### Qual condição foi avaliada?

Se era maior de idade e tinha autorização.

### Qual bloco foi executado?

O bloco `else`.

### O último `console.log()` será executado? Por quê?

Porque está fora do bloco de condição.

---

## Exercício 4

Um sistema de uma clínica possui as seguintes regras:

- O paciente deve possuir cadastro.
- O convênio deve estar ativo.
- O médico deve possuir horário disponível.

Sem escrever código, descreva:

### As variáveis necessárias;

```text
clienteCadastrado = true
convenio_ok = true
horario_disponivel = true
```

### Os tipos de dados;

Nesse caso, como exemplo, usei todos como booleanos, mas dá para fazer igual ao exemplo do Palio.

### As decisões que o sistema deve tomar;

Precisa verificar se o cliente tem cadastro, convênio ativo **e** horário disponível. Só então liberar a consulta.

### Como você faria a depuração caso o sistema liberasse consultas para pacientes sem convênio?

- Fazer um Teste de Mesa.
- Verificar os valores das variáveis.
- Fazer o Fluxo de Execução.
- Descobrir por que pacientes sem convênio chegaram ao bloco de liberação.
- Só depois alterar o algoritmo.
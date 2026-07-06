# Aula 05 — Teste de Mesa

---

# 🎯 Objetivo da Aula

Ao final desta aula, você será capaz de:

- Entender o que é um Teste de Mesa;
- Simular a execução de um algoritmo manualmente;
- Acompanhar a mudança de valores das variáveis;
- Encontrar erros de lógica antes mesmo de executar o programa;
- Desenvolver uma habilidade essencial para depuração (debug).

---

# 📖 Introdução

Na primeira semana, o objetivo foi aprender como o computador pensa e como escrever algoritmos.

Mas existe uma pergunta muito importante:

> **Como saber se o algoritmo realmente funciona?**

Por meio do **Teste de Mesa**, conseguimos verificar e descobrir se o algoritmo funciona antes mesmo de executá-lo.

```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

---

# 🧠 O que é um Teste de Mesa?

É um método utilizado para simular mentalmente a execução de um algoritmo.

Basicamente, é uma forma de leitura e interpretação do código. Antes de pedir para o computador executar, vamos ler o algoritmo e entender o que cada instrução faz.

Ou seja:

- Lemos uma linha;
- Executamos mentalmente;
- Anotamos o que aconteceu;
- Seguimos para a próxima linha.

É exatamente isso que o computador faz.

---

# 💡 Uma analogia

Imagine que você está lendo uma receita de bolo.

Você pode simplesmente confiar que ela funciona...

Ou pode imaginar cada passo antes de começar.

- Coloque a farinha;
- Misture;
- Acrescente os ovos;
- Misture novamente.

Você está executando mentalmente a receita.

O Teste de Mesa é exatamente isso, só que com algoritmos.

---

# 💻 Como o computador executa um programa?

Ele lê e executa uma linha por vez, e não tudo ao mesmo tempo.

```text
Linha 1
   ↓
Executa
   ↓
Linha 2
   ↓
Executa
   ↓
Linha 3
   ↓
Executa
```

Uma instrução por vez.

Sempre nessa ordem, salvo quando uma estrutura de decisão ou repetição altera o fluxo.

---

# 🌍 Exemplo 1

Aqui vai um exemplo que achei simples da aula.

Considere o algoritmo:

```javascript
let idade = 18;
let nome = "Kauê";

idade = idade + 2;

console.log(idade);
```

Na primeira linha vemos:

```javascript
let idade = 18;
```

O que significa que a variável **idade** recebe o valor **18**.

Na segunda linha vemos:

```javascript
let nome = "Kauê";
```

Agora temos uma variável armazenando um valor do tipo **String**.

Na quarta linha temos:

```javascript
idade = idade + 2;
```

Aqui devemos lembrar que o computador resolve primeiro a expressão do lado direito da atribuição.

Como a variável **idade** vale **18**, a conta será:

```text
18 + 2 = 20
```

Depois disso, o operador `=` faz a **atribuição** desse novo valor à variável.

É importante lembrar que, nesse caso, o `=` **não significa igualdade**, como na matemática. Em programação, ele representa uma atribuição. Para comparar igualdade, utilizamos `==`.

Ou seja, o valor antigo da variável **idade** será substituído pelo novo valor.

Na quinta linha:

```javascript
console.log(idade);
```

O computador exibirá o valor armazenado na variável **idade**, que agora é **20**.

---

# 🌍 Exemplo 2 — Estrutura de Decisão

Agora vamos acompanhar um `if`.

```javascript
let nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

Vamos executar.

### Linha 1

```text
nota = 8
```

Tabela:

| Variável | Valor |
|----------|------:|
| nota | 8 |

### Linha 2

O computador verifica:

```text
8 >= 7
```

↓

```text
true
```

Como o resultado foi verdadeiro, ele entra no bloco do `if`.

Executa:

```javascript
console.log("Aprovado");
```

E ignora o bloco `else`.

Resultado:

```text
Aprovado
```

---

# 🧠 Quando utilizar o Teste de Mesa?

Sempre que:

- Um algoritmo não estiver funcionando;
- Houver muitas condições (`if`);
- Houver estruturas de repetição (`for`, `while`);
- Quiser entender um código novo;
- Estiver estudando lógica.

Mesmo programadores experientes fazem isso — às vezes no papel, às vezes mentalmente.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- O computador executa uma instrução por vez;
- O Teste de Mesa é a simulação manual da execução de um algoritmo;
- A cada linha devemos acompanhar o estado das variáveis;
- O operador `=` representa atribuição, e não igualdade matemática;
- O Teste de Mesa é uma das principais ferramentas para encontrar erros de lógica.
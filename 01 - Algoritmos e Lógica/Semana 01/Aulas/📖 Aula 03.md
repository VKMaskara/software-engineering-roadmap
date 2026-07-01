# Aula 03 — Operadores

## 🎯 Tema

**Aprender como manipular os dados armazenados nas variáveis utilizando operadores aritméticos, relacionais e lógicos, construindo expressões que representam a lógica de um algoritmo.**

---

# 📖 Contexto

Na aula anterior aprendemos que o computador armazena informações em **variáveis**.

Porém, apenas armazenar informações não é suficiente. O computador também precisa **processar esses dados**, e para isso ele utiliza os **operadores**.

Imagine, por exemplo, um sistema de uma academia.

Temos as seguintes variáveis:

```text
Peso = 82
Altura = 1.78
```

Sozinhas, essas variáveis representam apenas dados.

Mas, utilizando operadores matemáticos, conseguimos realizar cálculos, como o do **IMC (Índice de Massa Corporal)**.

Ou imagine um sistema bancário.

```text
Saldo = 1500
```

Quando um cliente realiza um saque de **R$ 200**, o sistema precisa calcular:

```text
1500 - 200
```

Perceba que os operadores são responsáveis por **manipular os dados armazenados nas variáveis**, permitindo que o computador realize cálculos, comparações e tomadas de decisão.

---

# 🎯 Objetivos da Aula

Ao final desta aula, você deverá ser capaz de:

- Explicar o que é um operador;
- Diferenciar operadores aritméticos, relacionais e lógicos;
- Construir expressões;
- Entender como o computador avalia uma expressão;
- Aplicar operadores para resolver pequenos problemas.

---

# 🧠 O que é um Operador?

Um **operador** é um símbolo cuja função é realizar uma operação sobre um ou mais valores.

Esses valores recebem o nome de **operandos**.

Por exemplo:

```text
10 + 5
```

Nesse caso:

- `10` e `5` são os **operandos**;
- `+` é o **operador**.

O resultado da expressão será:

```text
15
```

---

# 📚 Operadores Aritméticos

| Operador | Significado | Exemplo |
|----------|-------------|----------|
| `+` | Soma | `5 + 2 = 7` |
| `-` | Subtração | `8 - 3 = 5` |
| `*` | Multiplicação | `4 × 3 = 12` |
| `/` | Divisão | `10 ÷ 2 = 5` |
| `%` | Resto da divisão | `10 % 3 = 1` |

---

# 🧠 Expressões

Uma **expressão** é uma combinação de:

- Valores;
- Variáveis;
- Operadores.

Exemplo:

```text
(nota1 + nota2) / 2
```

Uma expressão representa um cálculo ou uma lógica que será avaliada pelo computador.

---

# 📐 Precedência dos Operadores

O computador segue a mesma ordem matemática que aprendemos na escola.

A prioridade é:

1. Parênteses;
2. Multiplicação e divisão;
3. Soma e subtração.

Por exemplo:

```text
5 + 2 × 3
```

Muitas pessoas respondem:

```text
21
```

Mas o correto é:

```text
11
```

Pois primeiro é feita a multiplicação:

```text
2 × 3 = 6
```

Depois:

```text
5 + 6 = 11
```

---

# 🌍 Exemplo

```text
(2 + 3) × 4
```

Como existem parênteses, começamos resolvendo essa parte:

```text
2 + 3 = 5
```

Depois:

```text
5 × 4 = 20
```

Resultado:

```text
20
```

---

# 📚 Operadores Relacionais

São utilizados para comparar valores.

O resultado de uma comparação sempre será:

```text
true
```

ou

```text
false
```

| Operador | Significado |
|----------|-------------|
| `==` | Igual |
| `!=` | Diferente |
| `>` | Maior |
| `<` | Menor |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

### Exemplo

```text
18 >= 18
```

Resultado:

```text
true
```

---

# 📚 Operadores Lógicos

Os operadores lógicos são utilizados para combinar comparações.

Os principais são:

## AND (E)

Representado por:

```text
&&
```

Retorna **verdadeiro apenas quando todas as condições forem verdadeiras**.

### Exemplo

```text
Idade >= 18
&&
Possui CNH
```

A pessoa só poderá dirigir se as duas condições forem verdadeiras.

---

## OR (OU)

Representado por:

```text
||
```

Retorna **verdadeiro quando pelo menos uma das condições for verdadeira**.

---

## NOT (NÃO)

Representado por:

```text
!
```

Inverte o valor lógico.

Exemplo:

```text
true
```

↓

```text
false
```

---

# 🌍 Exemplo do Mundo Real

Imagine um sistema de uma academia.

Para liberar a catraca, o sistema verifica:

- Mensalidade paga;
- Cadastro ativo.

Como as duas condições precisam ser verdadeiras, utilizamos o operador **AND (`&&`)**.

```text
MensalidadePaga && CadastroAtivo
```

Caso uma das condições seja falsa, a entrada será negada.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- Operadores são símbolos que realizam operações sobre valores;
- Os valores utilizados nas operações são chamados de **operandos**;
- Existem operadores aritméticos, relacionais e lógicos;
- Uma expressão combina valores, variáveis e operadores;
- O computador segue uma ordem de precedência para resolver expressões;
- Os operadores lógicos permitem combinar condições para tomadas de decisão.

---

# 💭 Conclusão

Os operadores são responsáveis por transformar dados em informações úteis.

Com eles, o computador consegue realizar cálculos, comparar valores e tomar decisões durante a execução de um algoritmo.

Dominar esse conceito é fundamental, pois praticamente todo programa utiliza operadores em algum momento.
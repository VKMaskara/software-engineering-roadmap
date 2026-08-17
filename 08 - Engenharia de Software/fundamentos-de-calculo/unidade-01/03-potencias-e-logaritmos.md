# Potências — Fundamentos

## O que é uma potência?

Considere:

```text
2³
```

Temos:

- `2`: base;
- `3`: expoente;
- `2³`: potência.

O expoente indica quantas vezes a base será multiplicada por ela mesma:

```text
2³ = 2 × 2 × 2 = 8
```

---

## 🧠 Analogia

Uma potência funciona como uma multiplicação compactada.

Assim como:

```text
3 + 3 + 3 + 3 = 4 × 3
```

Podemos compactar uma multiplicação de fatores iguais:

```text
3 × 3 × 3 × 3 = 3⁴
```

---

## Casos Importantes

### Expoente 1

Todo número elevado a `1` permanece igual:

```text
a¹ = a
```

Exemplo:

```text
7¹ = 7
```

---

### Expoente Zero

Todo número não nulo elevado a zero resulta em `1`:

```text
a⁰ = 1, com a ≠ 0
```

Exemplos:

```text
5⁰ = 1

(-10)⁰ = 1
```

---

## Base Negativa e Parênteses

Compare:

```text
(-2)²
```

e:

```text
-2²
```

Na primeira expressão, a base é `-2`:

```text
(-2)² = (-2) × (-2) = 4
```

Na segunda, a potência é calculada antes do sinal negativo:

```text
-2² = -(2²) = -4
```

Portanto:

```text
(-2)² = 4

-2² = -4
```

### Expoentes Pares e Ímpares

Quando a base negativa está entre parênteses:

- Expoente par → resultado positivo;
- Expoente ímpar → resultado negativo.

Exemplos:

```text
(-2)⁴ = 16

(-2)³ = -8
```

---

## Multiplicação de Potências de Mesma Base

Considere:

```text
2³ × 2⁴
```

Expandindo:

```text
(2 × 2 × 2) × (2 × 2 × 2 × 2)
```

Temos sete fatores iguais a `2`:

```text
2⁷
```

Logo:

```text
aᵐ × aⁿ = aᵐ⁺ⁿ
```

### 📌 Ponto de observação

Somamos os expoentes somente quando existe uma **multiplicação entre potências de mesma base**.

---

## Divisão de Potências de Mesma Base

Considere:

```text
5⁶ / 5²
```

Expandindo e cancelando os fatores iguais:

```text
(5 × 5 × 5 × 5 × 5 × 5) / (5 × 5)

= 5 × 5 × 5 × 5

= 5⁴
```

Portanto:

```text
aᵐ / aⁿ = aᵐ⁻ⁿ
```

---

## Potência de Potência

Considere:

```text
(2³)⁴
```

Multiplicamos os expoentes:

```text
2³ˣ⁴ = 2¹²
```

Portanto:

```text
(aᵐ)ⁿ = aᵐⁿ
```

---

## Potência de um Produto

Quando temos um produto elevado a uma potência:

```text
(a × b)ⁿ = aⁿ × bⁿ
```

Exemplo:

```text
(2 × 3)² = 2² × 3²

6² = 4 × 9

36 = 36
```

---

## Potência de uma Fração

Quando uma fração está elevada a uma potência, elevamos tanto o numerador quanto o denominador:

```text
(a/b)ⁿ = aⁿ/bⁿ
```

Exemplo:

```text
(2/3)² = 2²/3² = 4/9
```

---

## 📌 Resumo das Propriedades

| Operação | Propriedade |
| --- | --- |
| Multiplicação de mesma base | `aᵐ × aⁿ = aᵐ⁺ⁿ` |
| Divisão de mesma base | `aᵐ / aⁿ = aᵐ⁻ⁿ` |
| Potência de potência | `(aᵐ)ⁿ = aᵐⁿ` |
| Potência de produto | `(ab)ⁿ = aⁿbⁿ` |
| Potência de fração | `(a/b)ⁿ = aⁿ/bⁿ` |
| Expoente zero | `a⁰ = 1`, com `a ≠ 0` |

---

## Expoentes Negativos

Um expoente negativo **não torna automaticamente o resultado negativo**.

Ele indica que devemos inverter a base:

```text
a⁻ⁿ = 1/aⁿ
```

Portanto:

```text
5⁻² = 1/5² = 1/25
```

---

## Base Fracionária

Quando uma fração possui expoente negativo, invertemos a fração e transformamos o expoente em positivo.

Exemplo:

```text
(3/2)⁻²
```

Invertendo a fração:

```text
(2/3)²
```

Agora calculamos normalmente:

```text
(2/3)² = 2²/3² = 4/9
```

Portanto:

```text
(3/2)⁻² = 4/9
```

---

# Resumo de logaritmos

## 1. Ideia central

Um logaritmo responde à pergunta:

> A qual expoente devemos elevar uma base para obter determinado número?

Exemplo:

```text
2³ = 8
```

Na forma logarítmica:

```text
log₂(8) = 3
```

Lemos: **"logaritmo de 8 na base 2 é igual a 3"**.

As duas expressões dizem a mesma coisa:

```text
aˣ = b  ⇔  logₐ(b) = x
```

O logaritmo é, portanto, a operação usada para descobrir o expoente.

---

## 2. Partes de um logaritmo

Na expressão:

```text
log₂(8) = 3
```

- `2` é a **base**;
- `8` é o **logaritmando**;
- `3` é o **logaritmo**, isto é, o expoente encontrado.

Uma maneira prática de interpretar é:

```text
base^(resposta) = logaritmando
```

No exemplo:

```text
2³ = 8
```

---

## 3. Condições de existência nos números reais

Para `logₐ(b)` existir no conjunto dos números reais, precisamos de:

```text
a > 0
a ≠ 1
b > 0
```

Ou seja:

- a base precisa ser positiva;
- a base não pode ser 1;
- o logaritmando precisa ser positivo.

Exemplos válidos:

```text
log₂(8)
log₁₀(100)
log₅(1/25)
```

Exemplos que não existem nos números reais:

```text
log₂(0)
log₂(−8)
log₁(10)
log₋₂(8)
```

### Por que a base não pode ser 1?

```text
1⁰ = 1
1¹ = 1
1² = 1
```

Uma potência de base 1 nunca produz um número diferente de 1.

### Por que o logaritmando precisa ser positivo?

Uma base positiva elevada a qualquer expoente real sempre produz um valor positivo. Por isso, nesse contexto, não obtemos zero nem números negativos.

---

## 4. Resultados fundamentais

### Logaritmo de 1

```text
logₐ(1) = 0
```

porque:

```text
a⁰ = 1
```

Exemplo:

```text
log₅(1) = 0
```

### Logaritmo da própria base

```text
logₐ(a) = 1
```

porque:

```text
a¹ = a
```

Exemplo:

```text
log₇(7) = 1
```

### Base elevada ao próprio logaritmo

```text
a^(logₐ(b)) = b
```

Exemplo:

```text
2^(log₂(8)) = 8
```

### Logaritmo de uma potência da mesma base

```text
logₐ(aˣ) = x
```

Exemplo:

```text
log₃(3⁴) = 4
```

---

## 5. Cálculo por comparação com potências

### Expoente positivo

```text
log₂(32) = 5
```

porque:

```text
2⁵ = 32
```

### Expoente zero

```text
log₉(1) = 0
```

porque:

```text
9⁰ = 1
```

### Expoente negativo

```text
log₃(1/9) = −2
```

porque:

```text
3⁻² = 1/3² = 1/9
```

### Expoente fracionário

```text
log₉(3) = 1/2
```

porque:

```text
9¹ᐟ² = √9 = 3
```

Esses exemplos explicam por que potências negativas, frações e raízes são importantes para estudar logaritmos.

---

## 6. Propriedades dos logaritmos

As propriedades abaixo exigem logaritmos existentes e a mesma base.

### Logaritmo de um produto

```text
logₐ(M × N) = logₐ(M) + logₐ(N)
```

Exemplo:

```text
log₂(8 × 4) = log₂(8) + log₂(4)
log₂(32)    = 3 + 2
log₂(32)    = 5
```

**Produto dentro do logaritmo vira soma fora dele.**

### Logaritmo de um quociente

```text
logₐ(M/N) = logₐ(M) − logₐ(N)
```

Exemplo:

```text
log₂(8/2) = log₂(8) − log₂(2)
log₂(4)   = 3 − 1
log₂(4)   = 2
```

**Divisão dentro do logaritmo vira subtração fora dele.**

### Logaritmo de uma potência

```text
logₐ(Mⁿ) = n × logₐ(M)
```

Exemplo:

```text
log₂(8²) = 2 × log₂(8)
          = 2 × 3
          = 6
```

**O expoente do logaritmando pode passar multiplicando.**

### Logaritmo de uma raiz

Como uma raiz pode ser escrita como expoente fracionário:

```text
√M = M¹ᐟ²
```

então:

```text
logₐ(√M) = (1/2) × logₐ(M)
```

Exemplo:

```text
log₂(√16) = (1/2) × log₂(16)
           = (1/2) × 4
           = 2
```

---

## 7. O que não pode ser feito

### Logaritmo de uma soma

Não existe a propriedade:

```text
logₐ(M + N) = logₐ(M) + logₐ(N)   ← errado
```

Exemplo:

```text
log₂(2 + 2) = log₂(4) = 2
```

Mas:

```text
log₂(2) + log₂(2) = 1 + 1 = 2
```

Nesse exemplo os valores coincidem por acaso. A igualdade não é uma propriedade geral.

Também não existe:

```text
logₐ(M − N) = logₐ(M) − logₐ(N)   ← errado
```

As propriedades de separação funcionam apenas para **multiplicação, divisão e potência**.

---

## 8. Logaritmo decimal e logaritmo natural

### Logaritmo decimal

Quando a base não aparece e usamos `log`, geralmente a base é 10:

```text
log(1000) = log₁₀(1000) = 3
```

porque:

```text
10³ = 1000
```

### Logaritmo natural

O logaritmo natural possui base `e`:

```text
ln(x) = logₑ(x)
```

O número `e` é aproximadamente:

```text
e ≈ 2,71828
```

O logaritmo natural aparece com frequência em crescimento contínuo, juros, estatística, física e cálculo.

Resultados importantes:

```text
ln(1) = 0
ln(e) = 1
ln(eˣ) = x
```

---

## 9. Mudança de base

Uma calculadora geralmente possui as teclas `log` e `ln`, mas talvez não possua uma tecla para uma base como 2 ou 3.

Usamos:

```text
logₐ(b) = log(b)/log(a)
```

ou:

```text
logₐ(b) = ln(b)/ln(a)
```

Exemplo:

```text
log₂(10) = log(10)/log(2)
          ≈ 3,3219
```

Não misture os tipos no numerador e no denominador. Use `log/log` ou `ln/ln`.

---

## 10. Equações logarítmicas simples

### Transformação em potência

Resolva:

```text
log₂(x) = 5
```

Transformando em potência:

```text
2⁵ = x
x = 32
```

### Logaritmando como expressão

Resolva:

```text
log₃(x − 1) = 2
```

Transformando em potência:

```text
3² = x − 1
9 = x − 1
x = 10
```

Verificação da condição:

```text
x − 1 > 0
10 − 1 > 0
9 > 0   ← verdadeiro
```

### Igualdade de logaritmos de mesma base

Se:

```text
logₐ(M) = logₐ(N)
```

então:

```text
M = N
```

desde que ambos os logaritmos existam.

Exemplo:

```text
log₂(x + 1) = log₂(7)
x + 1 = 7
x = 6
```

### Uso das propriedades

Resolva:

```text
log₂(x) + log₂(4) = 5
```

Usando a propriedade do produto:

```text
log₂(4x) = 5
```

Transformando em potência:

```text
2⁵ = 4x
32 = 4x
x = 8
```

Verificação:

```text
x > 0
8 > 0   ← verdadeiro
```

---

## 11. Equações exponenciais resolvidas com logaritmos

Os logaritmos também permitem descobrir um expoente quando não conseguimos igualar facilmente as bases.

Resolva:

```text
2ˣ = 10
```

Aplicamos log nos dois lados:

```text
log(2ˣ) = log(10)
```

O expoente passa multiplicando:

```text
x × log(2) = log(10)
```

Isolando `x`:

```text
x = log(10)/log(2)
x ≈ 3,3219
```

---

## 12. Aplicações

Logaritmos são utilizados quando há crescimento ou redução multiplicativa, especialmente em:

- crescimento populacional;
- juros compostos;
- tempo de execução e análise de algoritmos;
- quantidade de bits necessária para representar valores;
- escalas de intensidade sonora;
- acidez e pH;
- terremotos;
- processamento de sinais;
- estatística e ciência de dados.

### Relação com Engenharia de Software

Na busca binária, o espaço de busca é dividido pela metade a cada etapa. O número aproximado de etapas para `n` elementos é:

```text
log₂(n)
```

Exemplo com 1.024 elementos:

```text
log₂(1024) = 10
```

Isso significa que uma busca binária precisa de, no máximo, aproximadamente 10 divisões para localizar um elemento nesse conjunto.

---

## 13. Erros comuns

1. Confundir logaritmo com divisão.

   ```text
   log₂(8) não significa 8/2.
   ```

2. Confundir `logₐ(1)` com `logₐ(a)`.

   ```text
   logₐ(1) = 0
   logₐ(a) = 1
   ```

3. Aceitar logaritmando zero ou negativo nos números reais.

4. Usar base 1, zero ou negativa.

5. Separar incorretamente uma soma ou subtração dentro do logaritmo.

6. Esquecer de verificar se a resposta torna todos os logaritmandos positivos.

7. Na mudança de base, inverter numerador e denominador.

---

## 14. Procedimento para resolver exercícios

### Quando o logaritmo pode ser calculado mentalmente

1. Identifique a base.
2. Pergunte: "A qual expoente elevo essa base para obter o logaritmando?"
3. Considere expoentes positivos, zero, negativos e fracionários.

### Quando há uma equação logarítmica

1. Anote as condições: cada logaritmando deve ser maior que zero.
2. Use as propriedades quando necessário.
3. Transforme a forma logarítmica em potência.
4. Resolva a equação resultante.
5. Verifique a resposta nas condições e na equação original.

---

## 15. Resumo rápido

```text
aˣ = b  ⇔  logₐ(b) = x

Condições:
a > 0, a ≠ 1 e b > 0

logₐ(1) = 0
logₐ(a) = 1
logₐ(aˣ) = x

logₐ(M × N) = logₐ(M) + logₐ(N)
logₐ(M/N)   = logₐ(M) − logₐ(N)
logₐ(Mⁿ)    = n × logₐ(M)

logₐ(b) = log(b)/log(a)
logₐ(b) = ln(b)/ln(a)
```

Frase para memorizar:

> O logaritmo é o expoente ao qual a base deve ser elevada para produzir o logaritmando.

---

## 16. Exercícios

### Parte A — Cálculo direto

```text
1. log₂(64)
2. log₃(81)
3. log₅(1)
4. log₁₀(0,001)
5. log₄(2)
6. log₂(1/16)
```

### Parte B — Conversão

Converta para a forma logarítmica:

```text
1. 2⁵ = 32
2. 10⁻² = 0,01
3. 9¹ᐟ² = 3
```

Converta para a forma de potência:

```text
4. log₃(27) = 3
5. log₂(1/8) = −3
```

### Parte C — Propriedades

Simplifique:

```text
1. log₂(8) + log₂(4)
2. log₃(81) − log₃(3)
3. 2 × log₅(5)
```

### Parte D — Equações

Resolva e verifique as condições:

```text
1. log₂(x) = 6
2. log₃(x − 2) = 2
3. log₂(x) + log₂(4) = 6
4. log₅(x + 1) = log₅(11)
```

---

## 17. Gabarito

### Parte A

```text
1. 6
2. 4
3. 0
4. −3
5. 1/2
6. −4
```

### Parte B

```text
1. log₂(32) = 5
2. log₁₀(0,01) = −2
3. log₉(3) = 1/2
4. 3³ = 27
5. 2⁻³ = 1/8
```

### Parte C

```text
1. 5
2. 3
3. 2
```

### Parte D

```text
1. x = 64
2. x = 11
3. x = 16
4. x = 10
```

---

## 18. Referências para estudo

- [Khan Academy — Logaritmos](https://pt.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs)
- [OpenStax — Logarithmic Functions](https://openstax.org/books/college-algebra-2e/pages/6-3-logarithmic-functions)
- [OpenStax — Logarithmic Properties](https://openstax.org/books/college-algebra-2e/pages/6-5-logarithmic-properties)
- Material da disciplina **Fundamentos de Cálculo Aplicado**, Unidade 1, Aula 3.

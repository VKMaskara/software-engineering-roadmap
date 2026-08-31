# Função Exponencial

Uma função exponencial possui a variável no expoente:

```text
f(x) = aˣ
```

As condições da base são:

```text
a > 0
a ≠ 1
```

Exemplos:

```text
f(x) = 2ˣ
```

```text
g(x) = (1/2)ˣ
```

```text
h(x) = 10ˣ
```

Não é função exponencial:

```text
f(x) = x²
```

Nesse caso, a variável está na base.

---

## Comparação

### Função afim

```text
f(x) = 2x + 1
```

### Função quadrática

```text
f(x) = x²
```

### Função exponencial

```text
f(x) = 2ˣ
```

A posição da variável muda:

```text
2x → multiplicação

x² → variável na base

2ˣ → variável no expoente
```

---

## Crescimento Exponencial

Considere:

```text
f(x) = 2ˣ
```

| `x` | `f(x)` |
| --: | -----: |
| -2 | `1/4` |
| -1 | `1/2` |
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

Quando `x` aumenta uma unidade, a saída é multiplicada por `2`:

```text
1 → 2 → 4 → 8 → 16
```

Ela não cresce adicionando sempre o mesmo valor.

Ela cresce multiplicando pelo mesmo fator.

---

## Crescimento e Decrescimento

### Base maior que 1

Se:

```text
a > 1
```

A função é crescente.

Exemplo:

```text
f(x) = 3ˣ
```

Temos:

```text
1 → 3 → 9 → 27...
```

---

### Base entre 0 e 1

Se:

```text
0 < a < 1
```

A função é decrescente.

Exemplo:

```text
g(x) = (1/2)ˣ
```

| `x` | `g(x)` |
| --: | -----: |
| 0 | 1 |
| 1 | `1/2` |
| 2 | `1/4` |
| 3 | `1/8` |

As saídas diminuem:

```text
1 → 1/2 → 1/4 → 1/8
```

---

## Características do Gráfico

Para qualquer função exponencial básica:

```text
f(x) = aˣ
```

Temos:

```text
f(0) = a⁰ = 1
```

Portanto, o gráfico sempre passa pelo ponto:

```text
(0, 1)
```

Além disso:

```text
aˣ > 0
```

A saída nunca é zero nem negativa.

O gráfico se aproxima do eixo horizontal, mas não o toca.

Por isso:

```text
y = 0
```

É uma **assíntota horizontal**.

---

## Domínio e Imagem

Podemos utilizar qualquer número real como entrada:

```text
Domínio: R
```

As saídas são sempre positivas:

```text
Imagem: y > 0
```

---

## 🧠 Analogia da População

Uma cultura começa com `100` bactérias e dobra a cada hora:

```text
P(t) = 100 × 2ᵗ
```

Temos:

```text
100 → quantidade inicial

2 → fator de crescimento

t → tempo

P(t) → população após t horas
```

Depois de 3 horas:

```text
P(3) = 100 × 2³

P(3) = 100 × 8

P(3) = 800
```

---

# Decrescimento Exponencial

Considere:

```text
Q(t) = 800 × (1/2)ᵗ
```

Temos:

```text
800 → quantidade inicial

1/2 → fator de decrescimento
```

Como:

```text
0 < 1/2 < 1
```

A função é decrescente.

Calculando:

```text
Q(0) = 800 × 1 = 800

Q(1) = 800 × 1/2 = 400

Q(2) = 800 × 1/4 = 200

Q(3) = 800 × 1/8 = 100
```

A quantidade é reduzida à metade em cada período.

Se a dose inicial for `800 mg`:

```text
0 horas  → 800 mg

8 horas  → 400 mg

16 horas → 200 mg

24 horas → 100 mg
```

Esse é um exemplo de **decaimento exponencial**.

---

# Equações Exponenciais

Uma equação exponencial possui a incógnita no expoente.

Exemplo:

```text
2ˣ = 16
```

Procuramos o expoente de `2` que resulta em `16`.

Sabemos que:

```text
2⁴ = 16
```

Portanto:

```text
x = 4
```

Essa ideia está diretamente relacionada aos logaritmos.

---

## Igualando as Bases

Considere:

```text
4ˣ = 64
```

Escrevemos os dois lados na base `2`:

```text
4 = 2²

64 = 2⁶
```

Então:

```text
(2²)ˣ = 2⁶
```

Aplicando a propriedade de potência de potência:

```text
2²ˣ = 2⁶
```

Como as bases são iguais, os expoentes também precisam ser iguais:

```text
2x = 6

x = 3
```

Verificação:

```text
4³ = 64
```

---

## Expoente com Expressão

Considere:

```text
3ˣ⁺¹ = 81
```

Sabemos que:

```text
81 = 3⁴
```

Então:

```text
3ˣ⁺¹ = 3⁴
```

Igualamos os expoentes:

```text
x + 1 = 4

x = 3
```

Verificação:

```text
3³⁺¹ = 3⁴ = 81
```

---

## Comparando com Entradas Inteiras

### Função afim

```text
f(x) = 2x
```

Saídas:

```text
0, 2, 4, 6, 8...
```

### Função quadrática

```text
g(x) = x²
```

Saídas:

```text
0, 1, 4, 9, 16...
```

### Função exponencial

```text
h(x) = 2ˣ
```

Saídas:

```text
1, 2, 4, 8, 16...
```
# Funções Afim e Quadrática

# O que é uma função?

Uma função é uma regra que associa cada valor de entrada a um único valor de saída.

Podemos imaginar uma máquina:

```text
Entrada → Regra → Saída
```

Exemplo:

```text
Entrada → Multiplicar por 2 e somar 3 → Saída
```

Se a entrada for `4`:

```text
4 → 2 × 4 + 3 → 11
```

A lei dessa função é:

```text
f(x) = 2x + 3
```

O significado de `f(x)` é:

> O valor de saída produzido quando a entrada é `x`.

Na função:

```text
f(x) = 2x + 3
```

Para calcular `f(4)`, substituímos `x` por `4`:

```text
f(4) = 2 × 4 + 3
f(4) = 8 + 3
f(4) = 11
```

Isso significa:

```text
Entrada = 4
Saída = 11
```

---

# Função e equação não são a mesma coisa

Uma função descreve uma relação variável:

```text
f(x) = 2x + 3
```

Podemos escolher diferentes entradas:

| Entrada `x` | Saída `f(x)` |
| ----------: | -----------: |
| 0 | 3 |
| 1 | 5 |
| 2 | 7 |
| 3 | 9 |

Já uma equação estabelece uma condição específica:

```text
2x + 3 = 11
```

Neste caso, procuramos a entrada que produz a saída `11`.

```text
x = 4
```

Portanto:

- **Função** → descreve todas as relações entre entradas e saídas;
- **Equação** → procura valores que satisfazem uma condição.

---

# Função Afim

Uma função afim possui a forma:

```text
f(x) = ax + b
```

Com:

```text
a e b ∈ R
```

Exemplo:

```text
f(x) = 2x + 3
```

Temos:

```text
a = 2
b = 3
```

---

## 1. O significado de `a`

O coeficiente `a` indica quanto a saída varia quando a entrada aumenta uma unidade.

Na função:

```text
f(x) = 2x + 3
```

Temos:

```text
a = 2
```

| `x` | `f(x)` |
| --: | -----: |
| 0 | 3 |
| 1 | 5 |
| 2 | 7 |
| 3 | 9 |

Sempre que `x` aumenta `1`, `f(x)` aumenta `2`:

```text
3 → 5 → 7 → 9
```

Por isso, `a` também é chamado de **taxa de variação** ou **coeficiente angular**.

---

## 2. O significado de `b`

O coeficiente `b` é o valor inicial da função, isto é, a saída quando a entrada é zero.

```text
f(x) = ax + b
```

Substituindo `x = 0`:

```text
f(0) = a × 0 + b
f(0) = b
```

Na função:

```text
f(x) = 2x + 3
```

Temos:

```text
f(0) = 3
```

Por isso, o gráfico encontra o eixo vertical no ponto:

```text
(0, 3)
```

---

## 🧠 Analogia do táxi

Considere uma corrida com:

```text
Taxa inicial = R$ 6,00
Preço por quilômetro = R$ 3,00
```

O custo pode ser modelado por:

```text
C(x) = 3x + 6
```

Em que:

- `x` → quantidade de quilômetros;
- `C(x)` → custo da corrida;
- `3` → preço por quilômetro;
- `6` → taxa inicial.

Se a corrida tiver `4 km`:

```text
C(4) = 3 × 4 + 6
C(4) = 12 + 6
C(4) = 18
```

A corrida custará:

```text
R$ 18,00
```

Observe:

```text
a = 3 → valor que varia com a distância

b = 6 → valor que existe mesmo quando x = 0
```

---

# Gráfico da Função Afim

O gráfico de uma função afim é uma **reta**.

```text
f(x) = ax + b
```

O comportamento da reta depende principalmente de `a`.

---

## Função Crescente

Se:

```text
a > 0
```

A função é crescente.

Exemplo:

```text
f(x) = 2x + 3
```

Quando `x` aumenta, `f(x)` também aumenta.

---

## Função Decrescente

Se:

```text
a < 0
```

A função é decrescente.

Exemplo:

```text
f(x) = -2x + 6
```

| `x` | `f(x)` |
| --: | -----: |
| 0 | 6 |
| 1 | 4 |
| 2 | 2 |
| 3 | 0 |

Quando `x` aumenta, `f(x)` diminui.

---

## Função Constante

Se:

```text
a = 0
```

Temos:

```text
f(x) = b
```

Exemplo:

```text
f(x) = 5
```

Independentemente da entrada, a saída sempre será `5`.

---

# Zero ou Raiz da Função Afim

A raiz da função é o valor de `x` que produz saída zero:

```text
f(x) = 0
```

Considere:

```text
f(x) = 2x - 6
```

Para encontrar a raiz:

```text
2x - 6 = 0
2x = 6
x = 3
```

Verificação:

```text
f(3) = 2 × 3 - 6
f(3) = 6 - 6
f(3) = 0
```

Logo:

```text
Raiz = 3
```

No gráfico, isso significa que a reta encontra o eixo horizontal no ponto:

```text
(3, 0)
```

---

## Fórmula direta da raiz

Para:

```text
f(x) = ax + b
```

Fazemos:

```text
ax + b = 0
ax = -b
x = -b/a
```

Com:

```text
a ≠ 0
```

---

# Resumo da Função Afim

### Forma

```text
f(x) = ax + b
```

### `a`

Taxa de variação.

### `b`

```text
f(0)
```

Ponto onde a reta encontra o eixo vertical.

### `a > 0`

Função crescente.

### `a < 0`

Função decrescente.

### `a = 0`

Função constante.

### Raiz

Valor de `x` para o qual:

```text
f(x) = 0
```

---

# Construção do Gráfico da Função Afim

Para desenhar uma reta, precisamos de pelo menos dois pontos.

Na função:

```text
f(x) = -3x + 12
```

Já conhecemos dois pontos importantes.

### Interseção com o eixo vertical

```text
(0, 12)
```

### Interseção com o eixo horizontal

```text
(4, 0)
```

Ao ligar esses dois pontos, obtemos a reta da função.

---

## Como interpretar um ponto?

O ponto:

```text
(2, 6)
```

Significa:

```text
Entrada x = 2
Saída f(x) = 6
```

Verificação:

```text
f(2) = -3 × 2 + 12
f(2) = -6 + 12
f(2) = 6
```

Portanto:

```text
(2, 6)
```

Pertence ao gráfico.

Já o ponto:

```text
(2, 8)
```

Não pertence, porque:

```text
f(2) = 6
```

E não `8`.

---

## Método para construir uma tabela

Escolhemos valores simples para `x` e calculamos as saídas:

| `x` | Cálculo | `f(x)` |
| --: | ------- | -----: |
| 0 | `-3 × 0 + 12` | 12 |
| 1 | `-3 × 1 + 12` | 9 |
| 2 | `-3 × 2 + 12` | 6 |
| 3 | `-3 × 3 + 12` | 3 |
| 4 | `-3 × 4 + 12` | 0 |

Isso gera os pontos:

```text
(0, 12)
(1, 9)
(2, 6)
(3, 3)
(4, 0)
```

-> Todos pertencem à mesma reta.

---

# Função Quadrática

Uma função quadrática possui a forma:

```text
f(x) = ax² + bx + c
```

Com:

```text
a ≠ 0
```

Exemplo:

```text
f(x) = x² - 5x + 6
```

Ela é quadrática porque a maior potência da variável é `2`:

```text
x²
```

---

# Função Quadrática e Equação de Segundo Grau

A função:

```text
f(x) = x² - 5x + 6
```

Descreve várias entradas e saídas.

Quando queremos encontrar suas raízes, fazemos:

```text
f(x) = 0
```

Assim:

```text
x² - 5x + 6 = 0
```

Agora temos uma equação de segundo grau.

Portanto:

### Função quadrática

```text
f(x) = ax² + bx + c
```

### Equação usada para encontrar as raízes

```text
Δ = b² - 4ac

x = (-b ± √Δ) / 2a
```

---

# Gráfico da Função Quadrática

O gráfico de uma função quadrática é uma curva chamada:

> **Parábola**

Ela pode ter dois formatos principais:

```text
a > 0 → abertura para cima

a < 0 → abertura para baixo
```

---

## 🧠 Analogia

Imagine uma tigela:

```text
a > 0 → tigela normal
```

Agora imagine uma tigela invertida:

```text
a < 0 → tigela de cabeça para baixo
```

O valor de `a` determina a concavidade da parábola.

---

## Exemplos

```text
f(x) = 2x² + 3x - 1
```

Como:

```text
a = 2 > 0
```

A parábola possui abertura para cima.

Já:

```text
g(x) = -3x² + 4x + 2
```

Como:

```text
a = -3 < 0
```

A parábola possui abertura para baixo.

---

# Significado de `c`

Na função:

```text
f(x) = ax² + bx + c
```

Calculamos `f(0)`:

```text
f(0) = a × 0² + b × 0 + c
f(0) = c
```

Portanto:

```text
(0, c)
```

É o ponto de encontro com o eixo vertical.

Exemplo:

```text
f(x) = x² - 5x + 6
```

Como:

```text
c = 6
```

Temos:

```text
f(0) = 6
```

A parábola encontra o eixo vertical em:

```text
(0, 6)
```

Observe a semelhança:

### Função afim

```text
b = f(0)
```

### Função quadrática

```text
c = f(0)
```

---

# Relação com o Delta

```text
Δ > 0 → duas raízes reais diferentes

Δ = 0 → uma raiz real dupla

Δ < 0 → nenhuma raiz real
```

No gráfico:

```text
Duas raízes → a parábola cruza o eixo horizontal duas vezes.

Raiz dupla → a parábola toca o eixo horizontal uma vez.

Nenhuma raiz real → a parábola não encontra o eixo horizontal.
```

---

# Vértice da Parábola

O vértice é o ponto onde a parábola muda de direção.

```text
Abertura para cima → vértice é o ponto mínimo.

Abertura para baixo → vértice é o ponto máximo.
```

Considere:

```text
g(x) = -2x² + 8x + 10
```

A abertura é para baixo.

Portanto, o vértice representa o maior valor da função.

---

## Coordenada horizontal do vértice

Usamos:

```text
xᵥ = -b/(2a)
```

Substituindo:

```text
xᵥ = -8 / [2 × (-2)]

xᵥ = -8 / -4

xᵥ = 2
```

---

## Coordenada vertical do vértice

Calculamos a função em `x = 2`:

```text
yᵥ = g(2)
```

Então:

```text
g(2) = -2 × 2² + 8 × 2 + 10

g(2) = -2 × 4 + 16 + 10

g(2) = -8 + 16 + 10

g(2) = 18
```

Logo, o vértice é:

```text
V = (2, 18)
```

---

## Interpretação

```text
xᵥ = 2 → entrada na qual ocorre o valor máximo.

yᵥ = 18 → maior valor assumido pela função.
```

Como a parábola abre para baixo:

```text
Valor máximo = 18
```

---

# Simetria

A parábola é simétrica em relação à linha vertical que passa pelo vértice:

```text
x = 2
```

As raízes são:

```text
-1 e 5
```

Elas estão à mesma distância de `2`:

```text
2 - (-1) = 3

5 - 2 = 3
```

Por isso, o eixo de simetria da parábola passa exatamente pelo vértice.
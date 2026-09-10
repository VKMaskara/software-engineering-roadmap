# Funções Logarítmicas

Sei que o logaritmo procura um expoente:

```text
log₂(8) = 3
```

Porque:

```text
2³ = 8
```

---

## Função Logarítmica

A função logarítmica aplica essa ideia a diferentes valores de `x`:

```text
f(x) = log₂(x)
```

Ela responde à pergunta:

> "Qual expoente devemos colocar no número 2 para obter x?"

### Alguns valores

```text
f(1) = log₂(1) = 0
porque 2⁰ = 1

f(2) = log₂(2) = 1
porque 2¹ = 2

f(4) = log₂(4) = 2
porque 2² = 4

f(8) = log₂(8) = 3
porque 2³ = 8
```

Também podemos usar expoentes negativos:

```text
f(1/2) = log₂(1/2) = -1
porque 2⁻¹ = 1/2
```

---

## Relação com a Função Exponencial

As funções exponencial e logarítmica realizam operações inversas:

```text
2³ = 8  ⟺  log₂(8) = 3
```

Perceba a troca de posições:

```text
aʸ = x  ⟺  logₐ(x) = y
```

Na função exponencial, procuramos o resultado da potência.

Na função logarítmica, conhecemos o resultado e procuramos o expoente.

---

## Condições de Existência

Na expressão:

```text
logₐ(x)
```

Devemos respeitar três condições:

```text
a > 0
a ≠ 1
x > 0
```

Portanto:

```text
log₂(8)
```

existe, mas:

```text
log₂(0)
log₂(-8)
```

não existem nos números reais.

---

## 🧠 Analogia

Imagine uma máquina exponencial:

```text
expoente
   ↓
  2ˣ
   ↓
resultado
```

A máquina logarítmica trabalha no sentido contrário:

```text
resultado
   ↓
log₂(x)
   ↓
expoente
```

---

# Domínio, Imagem e Gráfico da Função Logarítmica

Vamos usar como exemplo:

```text
f(x) = log₂(x)
```

A função recebe um número positivo `x` e devolve o expoente que devemos colocar na base `2`.

---

## Domínio

O domínio representa os valores que podem entrar na função.

Como o logaritmando precisa ser positivo:

```text
x > 0
```

Logo:

```text
D(f) = ℝ₊*
```

ou, usando intervalo:

```text
D(f) = (0, +∞)
```

Isso significa que podemos calcular:

```text
log₂(1)
log₂(5)
log₂(1/2)
```

Porém, não podemos calcular nos números reais:

```text
log₂(0)
log₂(-3)
```

### 🧠 Analogia

O domínio é como a lista de entradas permitidas por um sistema.

A função logarítmica rejeita o zero e os números negativos.

---

## Imagem

A imagem representa os possíveis resultados da função.

Exemplos:

```text
log₂(8) = 3

log₂(1) = 0

log₂(1/2) = -1
```

A função pode produzir resultados positivos, zero e negativos.

Portanto:

```text
Im(f) = ℝ
```

### Atenção à diferença

```text
Entrada → precisa ser positiva.

Saída → pode ser qualquer número real.
```

---

## Pontos do Gráfico

Vamos construir alguns pontos:

| `x` | `f(x) = log₂(x)` | Ponto |
| ---: | ---: | ---: |
| `1/4` | `-2` | `(1/4, -2)` |
| `1/2` | `-1` | `(1/2, -1)` |
| `1` | `0` | `(1, 0)` |
| `2` | `1` | `(2, 1)` |
| `4` | `2` | `(4, 2)` |

### Regra importante

Toda função logarítmica passa pelo ponto:

```text
(1, 0)
```

Isso acontece porque:

```text
logₐ(1) = 0
```

já que:

```text
a⁰ = 1
```

Ela não passa pelo ponto `(0, 0)`, pois o logaritmo de zero não existe.

---

## Comportamento Próximo de Zero

A função pode usar valores positivos muito próximos de zero:

```text
0,1
0,01
0,001
...
```

Mas nunca pode alcançar:

```text
x = 0
```

Por isso, a reta:

```text
x = 0
```

é uma **assíntota vertical** do gráfico.

Pense nela como uma parede: o gráfico pode se aproximar indefinidamente, mas não pode tocar nem atravessar essa parede.

---

## Função Crescente ou Decrescente

O comportamento depende da base.

### Se `a > 1`

A função é **crescente**.

Exemplo:

```text
f(x) = log₂(x)
```

Quanto maior for `x`, maior será `f(x)`.

### Se `0 < a < 1`

A função é **decrescente**.

Exemplo:

```text
g(x) = log₁/₂(x)
```

Quanto maior for `x`, menor será `g(x)`.

É a mesma regra estudada na função exponencial:

```text
a > 1       → crescente

0 < a < 1   → decrescente
```

---

# Domínio de Funções Logarítmicas

Já sabemos que, em qualquer logaritmo, o **logaritmando precisa ser positivo**:

```text
logₐ(logaritmando)
```

A condição é:

```text
logaritmando > 0
```

Quando temos:

```text
f(x) = log₂(x)
```

o logaritmando é apenas `x`.

Portanto:

```text
x > 0

D(f) = (0, +∞)
```

Agora veremos funções nas quais o logaritmando é uma expressão.

---

## Exemplo 1 — Subtração Dentro do Logaritmo

Considere:

```text
f(x) = log₂(x - 3)
```

O logaritmando não é somente `x`. É toda a expressão:

```text
x - 3
```

Portanto, precisamos exigir:

```text
x - 3 > 0
```

Resolvendo a inequação:

```text
x > 3
```

Assim, o domínio é:

```text
D(f) = (3, +∞)
```

Isso significa que `x` pode ser, por exemplo:

```text
4
5
10
3,5
```

Mas não pode ser `3`, pois:

```text
3 - 3 = 0

log₂(0)
```

não existe nos números reais.

Também não pode ser `2`, pois:

```text
2 - 3 = -1

log₂(-1)
```

também não existe nos números reais.

### Testando valores

Para `x = 4`:

```text
f(4) = log₂(4 - 3)

f(4) = log₂(1)

f(4) = 0
```

Existe, pois o logaritmando ficou positivo.

Para `x = 2`:

```text
f(2) = log₂(2 - 3)

f(2) = log₂(-1)
```

Não existe nos números reais.

---

## Exemplo 2 — Adição Dentro do Logaritmo

Considere:

```text
g(x) = log₃(x + 5)
```

O logaritmando é:

```text
x + 5
```

Aplicamos a condição:

```text
x + 5 > 0
```

Isolando `x`:

```text
x > -5
```

Portanto:

```text
D(g) = (-5, +∞)
```

### Atenção

Isso não significa que `x` precisa ser positivo.

Por exemplo, `x = -4` é permitido:

```text
-4 + 5 = 1
```

Logo:

```text
g(-4) = log₃(1) = 0
```

O que precisa ser positivo é o **logaritmando completo**, não necessariamente o valor isolado de `x`.

---

## Exemplo 3 — Coeficiente Multiplicando x

Considere:

```text
h(x) = log₅(2x - 6)
```

O logaritmando é:

```text
2x - 6
```

Aplicamos a condição:

```text
2x - 6 > 0
```

Somamos `6` aos dois lados:

```text
2x > 6
```

Dividimos por `2`:

```text
x > 3
```

Portanto:

```text
D(h) = (3, +∞)
```

---

## 🧠 Analogia — Controle de Entrada

Imagine que o logaritmo seja um sistema com uma validação:

```text
Se o logaritmando for maior que zero:
    entrada permitida

Senão:
    entrada rejeitada
```

Para:

```text
f(x) = log₂(x - 3)
```

o sistema não verifica diretamente se `x` é positivo.

Ele primeiro calcula:

```text
x - 3
```

e verifica se esse resultado é positivo.

---

# Equações Logarítmicas

Uma equação logarítmica é uma equação na qual a incógnita aparece no logaritmando.

Exemplo:

```text
log₂(x) = 4
```

Nosso objetivo é descobrir qual valor de `x` torna a igualdade verdadeira.

---

## Conversão para a Forma de Potência

Utilizamos a definição:

```text
logₐ(x) = y  ⟺  aʸ = x
```

Observe a função de cada elemento:

```text
logₐ(x) = y

a → base

x → logaritmando

y → resultado ou expoente
```

A conversão fica:

```text
aʸ = x
```

---

## Conversão Direta

Resolva:

```text
log₂(x) = 4
```

Convertendo para potência:

```text
2⁴ = x
```

Portanto:

```text
x = 16
```

### Verificação

Substituímos `x = 16` na equação original:

```text
log₂(16) = 4
```

Como:

```text
2⁴ = 16
```

a solução está correta.

---

## Expressão no Logaritmando

Resolva:

```text
log₃(x - 1) = 2
```

### Primeiro passo — Condição de existência

O logaritmando precisa ser positivo:

```text
x - 1 > 0

x > 1
```

Essa condição nos ajudará a verificar a resposta no final.

### Segundo passo — Conversão para potência

```text
log₃(x - 1) = 2
```

equivale a:

```text
3² = x - 1
```

Calculamos a potência:

```text
9 = x - 1
```

Somamos `1` aos dois lados:

```text
x = 10
```

### Terceiro passo — Verificação do domínio

Encontramos:

```text
x = 10
```

A condição era:

```text
x > 1
```

Como:

```text
10 > 1
```

a solução é válida.

Também podemos conferir na equação:

```text
log₃(10 - 1) = 2

log₃(9) = 2

3² = 9
```

Portanto:

```text
x = 10
```

---

## Coeficiente no Logaritmando

Resolva:

```text
log₂(2x - 4) = 3
```

### Condição de existência

```text
2x - 4 > 0

2x > 4

x > 2
```

### Conversão para potência

```text
2³ = 2x - 4

8 = 2x - 4
```

Somamos `4` aos dois lados:

```text
12 = 2x
```

Dividimos por `2`:

```text
x = 6
```

### Verificação

A condição era:

```text
x > 2
```

Como:

```text
6 > 2
```

a resposta é válida.

Substituindo na equação original:

```text
log₂(2 × 6 - 4) = 3

log₂(12 - 4) = 3

log₂(8) = 3
```

Como:

```text
2³ = 8
```

Portanto:

```text
x = 6
```

---

# 📌 Resumo

A função logarítmica possui a forma:

```text
f(x) = logₐ(x)
```

com as condições:

```text
a > 0
a ≠ 1
x > 0
```

Sua relação fundamental com a potência é:

```text
logₐ(x) = y  ⟺  aʸ = x
```

Para a função logarítmica básica:

```text
Domínio: D(f) = (0, +∞)

Imagem: Im(f) = ℝ
```

Além disso:

```text
a > 1       → função crescente

0 < a < 1   → função decrescente
```

Para encontrar o domínio de uma função logarítmica:

```text
logaritmando > 0
```

E para resolver uma equação logarítmica:

```text
1. Verificar a condição de existência;
2. Converter o logaritmo para potência;
3. Resolver a equação;
4. Verificar se a solução pertence ao domínio.
```
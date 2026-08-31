# Triângulos e Teorema de Pitágoras

## O que é um triângulo?

É uma figura geométrica formada por:

- 3 lados;
- 3 vértices;
- 3 ângulos internos.

A soma dos três ângulos internos de qualquer triângulo é:

```text
180°
```

Exemplo:

```text
60° + 60° + 60° = 180°
```

## Triângulo retângulo

Um triângulo retângulo possui um ângulo de `90°`.

Esse ângulo também é chamado de **ângulo reto** e costuma ser marcado por um pequeno quadrado.

Os outros dois ângulos precisam completar os `180°`:

```text
90° + ângulo 1 + ângulo 2 = 180°

ângulo 1 + ângulo 2 = 90°
```

Portanto, os outros dois ângulos são **complementares**.

---

## Catetos e hipotenusa

O triângulo retângulo possui:

- 2 catetos;
- 1 hipotenusa.

### Hipotenusa

A hipotenusa é:

- o lado oposto ao ângulo de `90°`;
- o maior lado do triângulo retângulo.

### Catetos

Os catetos são:

- os dois lados que formam o ângulo de `90°`;
- os lados menores do triângulo.

### Regra de identificação

Primeiro, localize o ângulo de `90°`.

```text
Lado oposto ao ângulo de 90° → hipotenusa

Lados que formam o ângulo de 90° → catetos
```

> A hipotenusa não é identificada apenas pela posição visual. O triângulo pode estar girado. A referência segura é sempre o ângulo de `90°`.

---

## 🧠 Analogia da escada

Imagine uma escada apoiada em uma parede:

```text
Parede → cateto vertical

Chão → cateto horizontal

Escada → hipotenusa
```

A parede e o chão formam um ângulo de `90°`. A escada está oposta a esse ângulo e, portanto, representa a hipotenusa.

---

## Teorema de Pitágoras

O Teorema de Pitágoras relaciona os três lados de um triângulo retângulo:

```text
hipotenusa² = cateto₁² + cateto₂²

h² = a² + b²
```

O quadrado da medida da hipotenusa é igual à soma dos quadrados das medidas dos catetos.

> Essa forma do Teorema de Pitágoras é utilizada somente em triângulos retângulos.

---

## Interpretação por áreas

Imagine um quadrado construído sobre cada lado do triângulo.

Se os catetos medirem `3` e `4`:

```text
Área do primeiro quadrado = 3² = 9

Área do segundo quadrado = 4² = 16

9 + 16 = 25

h² = 25

h = √25

h = 5
```

Essa é a interpretação geométrica do teorema:

```text
área do quadrado maior
=
soma das áreas dos dois quadrados menores
```

---

## Quando o lado desconhecido é um cateto

Considere:

```text
hipotenusa = 13

um cateto = 5

outro cateto = x
```

Aplicando Pitágoras:

```text
13² = 5² + x²

169 = 25 + x²

x² = 169 - 25

x² = 144

x = √144

x = 12
```

Resposta: o cateto mede `12`.

### Ponto importante

Quando procuramos a hipotenusa, normalmente somamos:

```text
h² = a² + b²
```

Quando procuramos um cateto, isolamos esse cateto e aparece uma subtração:

```text
a² = h² - b²
```

---

## Erros comuns em Pitágoras

### Confundir a hipotenusa

A hipotenusa é sempre o lado oposto ao ângulo de `90°`, não necessariamente o lado desenhado na diagonal.

### Esquecer os quadrados

Incorreto:

```text
h = 6 + 8
```

Correto:

```text
h² = 6² + 8²
```

### Somar antes de elevar

```text
6² + 8² = 36 + 64 = 100

(6 + 8)² = 14² = 196
```

Portanto:

```text
6² + 8² ≠ (6 + 8)²
```

### Esquecer a raiz no final

Se:

```text
h² = 100
```

a hipotenusa não é `100`:

```text
h = √100 = 10
```

### Obter uma hipotenusa menor que um cateto

Se os catetos medem `6` e `8`, uma resposta como `h = 5` não pode estar correta, pois a hipotenusa deve ser o maior lado.

---

## Resumo de Pitágoras

```text
Triângulo retângulo → possui um ângulo de 90°

Hipotenusa → lado oposto ao ângulo de 90° e maior lado

Catetos → lados que formam o ângulo de 90°

Teorema de Pitágoras → h² = a² + b²
```

---

# Ângulos: graus e radianos

Ângulos representam uma abertura ou uma rotação. As duas unidades mais utilizadas são **graus** e **radianos**.

## Graus

```text
0°   → nenhuma rotação

90°  → um quarto de volta

180° → meia volta

270° → três quartos de volta

360° → uma volta completa
```

## 🧠 Analogia do relógio

Imagine o ponteiro de um relógio começando no número `12`:

```text
12 até 3  → 90°

12 até 6  → 180°

12 até 9  → 270°

12 até 12 → 360°
```

Como o relógio possui 12 divisões iguais:

```text
360° / 12 = 30°
```

Portanto, cada intervalo entre dois números representa `30°`.

---

## Radianos

O radiano é outra unidade de medida de ângulos. Ele aparece principalmente no círculo trigonométrico e nas funções trigonométricas.

A relação fundamental é:

```text
180° = π rad
```

Assim:

```text
360° = 2π rad

90° = π/2 rad

270° = 3π/2 rad
```

### Conversão de graus para radianos

```text
radianos = graus · π/180
```

Exemplo:

```text
60° · π/180 = π/3 rad
```

### Conversão de radianos para graus

```text
graus = radianos · 180/π
```

Exemplo:

```text
π/4 · 180/π = 45°
```

### Conversões importantes

| Graus | Radianos |
|---:|---:|
| `0°` | `0` |
| `30°` | `π/6` |
| `45°` | `π/4` |
| `60°` | `π/3` |
| `90°` | `π/2` |
| `180°` | `π` |
| `270°` | `3π/2` |
| `360°` | `2π` |

---

# Razões trigonométricas

As razões trigonométricas relacionam os lados de um triângulo retângulo com um de seus ângulos agudos.

As três razões principais são:

- seno;
- cosseno;
- tangente.

## Ângulo de referência

Antes de classificar os catetos, precisamos escolher o ângulo agudo que será observado. Podemos representá-lo por `θ`.

Em relação a `θ`:

```text
Cateto oposto (CO) → fica em frente ao ângulo θ

Cateto adjacente (CA) → fica ao lado do ângulo θ

Hipotenusa (H) → fica em frente ao ângulo de 90°
```

> O cateto oposto e o cateto adjacente podem trocar de nome quando mudamos o ângulo de referência. A hipotenusa nunca muda.

---

## Seno

```text
sen(θ) = cateto oposto / hipotenusa

sen(θ) = CO/H
```

## Cosseno

```text
cos(θ) = cateto adjacente / hipotenusa

cos(θ) = CA/H
```

## Tangente

```text
tan(θ) = cateto oposto / cateto adjacente

tan(θ) = CO/CA
```

## Forma de memorizar

```text
SOH → Seno = Oposto / Hipotenusa

CAH → Cosseno = Adjacente / Hipotenusa

TOA → Tangente = Oposto / Adjacente
```

Ou:

```text
sen = CO/H

cos = CA/H

tan = CO/CA
```

---

## Como escolher a razão correta

1. Localize o ângulo de `90°` e identifique a hipotenusa.
2. Marque o ângulo de referência `θ`.
3. Identifique o cateto oposto e o cateto adjacente.
4. Observe quais lados são conhecidos e qual lado deve ser calculado.
5. Escolha a razão que contém esses dois lados.

| Lados envolvidos | Razão utilizada |
|---|---|
| Cateto oposto e hipotenusa | Seno |
| Cateto adjacente e hipotenusa | Cosseno |
| Cateto oposto e cateto adjacente | Tangente |

---

## Encontrando um lado desconhecido

Considere:

```text
ângulo = 30°

hipotenusa = 10

cateto oposto = x
```

Como aparecem o cateto oposto e a hipotenusa, utilizamos o seno:

```text
sen(30°) = x/10

1/2 = x/10

x = 10 · 1/2

x = 5
```

---

## Encontrando um ângulo

Quando conhecemos os lados e queremos encontrar o ângulo, utilizamos uma razão trigonométrica inversa.

Exemplo:

```text
sen(θ) = 3/5

θ = sen⁻¹(3/5)
```

Na calculadora, as funções inversas podem aparecer como:

```text
sin⁻¹ ou arcsin

cos⁻¹ ou arccos

tan⁻¹ ou arctan
```

> Nesse contexto, `sen⁻¹` representa a função inversa utilizada para encontrar o ângulo. Não significa `1/sen`.

### Modo da calculadora

```text
DEG → exercícios em graus

RAD → exercícios em radianos
```

---

## Ângulos notáveis

| Ângulo | Seno | Cosseno | Tangente |
|---:|---:|---:|---:|
| `30°` | `1/2` | `√3/2` | `√3/3` |
| `45°` | `√2/2` | `√2/2` | `1` |
| `60°` | `√3/2` | `1/2` | `√3` |

Relações importantes:

```text
sen(30°) = cos(60°)

sen(60°) = cos(30°)

sen(45°) = cos(45°)
```

---

## Quando utilizar Pitágoras ou trigonometria?

### Utilize Pitágoras quando:

- o triângulo for retângulo;
- dois lados forem conhecidos;
- o objetivo for encontrar o terceiro lado.

### Utilize seno, cosseno ou tangente quando:

- o triângulo for retângulo;
- houver um ângulo agudo conhecido ou procurado;
- for necessário relacionar esse ângulo com os lados.

---

## Erros comuns em trigonometria

- Definir os catetos antes de escolher o ângulo de referência.
- Escolher uma razão que não contém os lados envolvidos no problema.
- Confundir `sen⁻¹`, `cos⁻¹` ou `tan⁻¹` com uma divisão.
- Usar `RAD` quando o exercício está em graus, ou `DEG` quando está em radianos.
- Arredondar os valores antes da resposta final.

---

## Passo a passo para resolver um problema

1. Desenhe ou observe o triângulo.
2. Localize o ângulo de `90°`.
3. Identifique a hipotenusa.
4. Marque o ângulo de referência.
5. Identifique o cateto oposto e o adjacente.
6. Anote os valores conhecidos e a incógnita.
7. Escolha Pitágoras, seno, cosseno ou tangente.
8. Monte a equação.
9. Isole a incógnita.
10. Verifique o resultado e registre a unidade de medida.

---

## Resumo das fórmulas

```text
Teorema de Pitágoras:
h² = a² + b²

Seno:
sen(θ) = CO/H

Cosseno:
cos(θ) = CA/H

Tangente:
tan(θ) = CO/CA

Conversão para radianos:
radianos = graus · π/180

Conversão para graus:
graus = radianos · 180/π
```

---



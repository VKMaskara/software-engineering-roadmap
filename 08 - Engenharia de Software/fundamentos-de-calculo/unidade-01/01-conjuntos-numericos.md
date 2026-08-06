# Aula 1 - Conjuntos numéricos

## O que é um conjunto?
-> Um conjunto é uma coleção de elementos definisa por alguma característica ou regra.

considere:

A = {1,2,3,4,5}

Neste caso:
A é o nome doconjunto;
1,2,3,4,5 são seus elementos
Todos os eleentos são numeros naturais;
3 ∈ A siguinifica "3 pertende a A"

Isso me lembra Arrays:
Nome do Conjunto = Nome da variavel
Elementos = Valores guardados
Tipo de Conjunto = Tipo de dados que são guardados

## 🧠 Analogia
-> Funcina como uma pasta de computador. A pasta possui um nome e reúne arquivos selecionados de acordo com agum critério. Os arquivos são os elementos do conjunto.

## Formas de representar um conjunto

-> Listagem
Escrevemos diretamente os elementos:

A = {1,2,3,4,5}

-> Regra de formação
Descrevemoa a propriedade que todos elementos precisam satisfazer:

A = {x ∈ N | 1 <= x <= 5}

Lemos:
"A é o conjunto dos elementos x que pertencem aos naturais, tais que x entre 1 e 5"

Na anotação apareceu:
1 <= 1 <= 5

O valor centralprecisa ser x:
1 <= x <= 5

O símbolo | significa “tal que”. Alguns materiais usam ponto e vírgula ou dois-pontos com o mesmo sentido.

Diagrama

Podemos desenhar uma região e colocar seus elementos dentro dela. Isso é útil para visualizar conjuntos pequenos e relações entre vários conjuntos.

---

## Números naturais N

São os números  usados principalmente para contar quantidades:

N = {0,1,2,3,4,...}

O conjunto dos naturais não nulos é:

N* = {1,2,3,4...}

O asteristico indica que retiramos o zero.

---

## Números inteiros Z

Os numeros incluem os números naturais, seus correspondentes negativos e o zero:

Z={…,−3,−2,−1,0,1,2,3,…}

Portanto:

N ⊂ Z

O símbolo ⊂ significa “é subconjunto de”. Todo número natural é inteiro, mas nem todo inteiro é natural. Por exemplo:

-4 ∈ Z e -4 ∈/ N

Subconjuntos importantes
Z+ ={0,1,2,3,…}
Z+∗ = {1,2,3,…}
Z− ={…,−3,−2,−1,0}
Z−∗ ={…,−3,−2,−1}

Analogia

Imagine um elevador:

andares acima do térreo: inteiros positivos;
térreo: zero;
subsolos: inteiros negativos.

Os naturais representam apenas o térreo e os andares superiores. Os inteiros também permitem representar os subsolos.

## Números racionais Q

um número é racional quando pode ser escrito como
        a
        b   a/b - vou usar essa representação para facilitar

em que:
  a,b ∈ Z e b =/ 0

Exemplos:

2/1, −(7/3), 4/8, 0,75

Os números inteiros também são racionais, pois todo inteiro pode ser dividido por 1:

5/1 = 5, -3/1 = -3, 0/1 = 0 
Portanto:
Z ⊂ Q

Representações decimais

Um número racional apresenta uma representação decimal que:

termina; ou
continua repetindo um padrão.

Exemplos:
1/4 = 0,25
1/3 = 0,33333...
2/11 = 0,181818...

A repetição não torna um n´mero irracional. Na verdade, uma díxima periodica é racional

---
## Números Irracionais
Um número irracional não pode ser escrito como uma fração de dois números inteiros:

b/a,  b =/ 0

Sua representação decimal:

possui infinitas casas;
não termina;
não apresenta um padrão periódico.

Exemplos:

π = 3,14159265…
raiz de 2 = 1,41421356…
e = 2,71828182…

A ideia não é que o número seja “indivisível”. Um irracional pode ser dividido normalmente. O que não conseguimos é representá-lo exatamente por uma fração de dois inteiros.

Comparação

| Número         | Representação decimal | Classificação |
| -------------- | --------------------: | ------------- |
| (\frac14)      |              (0{,}25) | Racional      |
| (\frac13)      |       (0{,}333\ldots) | Racional      |
| (\frac{2}{11}) |    (0{,}181818\ldots) | Racional      |
| (\sqrt2)       |    (1{,}414213\ldots) | Irracional    |
| (\pi)          |    (3{,}141592\ldots) | Irracional    |

A diferença fundamental é a presença ou ausência de um padrão repetitivo.

---

## Números reais R

São a união dos números racionais com os irracionais:
   R = Q ∪ I

Isso siguinifica que todo número real é:

- racional ou
- irracional

Outra forma de entender: os números reais são todos os números que podem ser posicionados na reta numérica.

←───────────┬───────────┬───────────┬───────────→
           -2          -1           0           1


## 🧠 Analogia
Imagine que R seja uma grande cidade com dois bairros:
- O bairro dos racionais Q;
- O bairro dos Irracionas I.

Um morador da cidade precisa morar exatamente em um desses bairros. Um número real não pode ser simultaneamente racional e irracional:
 Q ∩ I = ∅

Organização até aqui
 N ⊂ Z ⊂ Q ⊂ R

Os irracionais também pertencem aos reais, mas não pertencem aos racionais:

I ⊂ R


---

## Números Complexos

Considere a equação:
x**2 = −1

Nos números reais, ela não possui solução, porque:

um número positivo elevado ao quadrado resulta em positivo;
um número negativo elevado ao quadrado também resulta em positivo;
zero elevado ao quadrado resulta em zero.

Para resolver esse tipo de equação, foi definida a unidade imaginária i:

 i**2 = -1

 Consequentemente:

i = raiz de -1

Um numero complexo possui a forma:
x = a+ bi

em que:
- a é a parte real;
- b é o coeficiente da parte imaginária;
- a,b ∈ R

Exemplos:

3 + 2i 
−4 + i
7 − 5i
6 + 0i = 6

O último exemplo mostra que todo número real também é complexo. Basta sua parte imaginária ser zero:

R ⊂ C

Analogia

Pense nos conjuntos numéricos como ferramentas.

Os números naturais resolvem problemas de contagem. Quando precisamos representar dívidas ou temperaturas negativas, ampliamos para os inteiros. Quando precisamos representar partes, ampliamos para os racionais. Quando aparecem valores como 
2
	​

 e π, precisamos dos reais. Quando precisamos resolver equações como x
2
=−1, ampliamos para os complexos.

Cada novo conjunto preserva os anteriores e acrescenta novas possibilidades.

Aplicação prática

Números complexos são usados em áreas como:

circuitos elétricos;
processamento de sinais;
telecomunicações;
computação gráfica;
transformadas de Fourier;
análise de áudio e imagens.

# Visão geral
N ⊂ Z ⊂ Q ⊂ R ⊂ C​

| Conjunto     | Exemplos                | Ideia principal                          |
| ------------ | ----------------------- | ---------------------------------------- |
| (\mathbb{N}) | (0,1,2,3)               | Contagem                                 |
| (\mathbb{Z}) | (-3,-1,0,4)             | Positivos, negativos e zero              |
| (\mathbb{Q}) | (\frac12, -7, 0{,}25)   | Pode ser escrito como fração de inteiros |
| (\mathbb{I}) | (\sqrt2,\pi,e)          | Decimal infinito e não periódico         |
| (\mathbb{R}) | (-2,\frac13,\sqrt5,\pi) | Todos os pontos da reta numérica         |
| (\mathbb{C}) | (3+2i,-i,7)             | Números da forma (a+bi)                  |


Exercícios
Exercício 1

Classifique cada número no menor conjunto possível entre N, Z, Q, I, R e C:

8 -> natural N
−5 -> Inteiro Z
3/4	​-> racional - Q 
0,7777… -> Dizima periodica Racional - Q
raiz de 3 -> Irracional I# Aula 1 - Conjuntos Numéricos

## O que é um conjunto?

-> Um conjunto é uma coleção de elementos definida por alguma característica ou regra.

Considere:

A = {1,2,3,4,5}

Neste caso:

- A é o nome do conjunto;
- 1, 2, 3, 4 e 5 são seus elementos;
- Todos os elementos são números naturais;
- 3 ∈ A significa "3 pertence a A".

Isso me lembra arrays:

- Nome do conjunto = Nome da variável;
- Elementos = Valores armazenados;
- Tipo de conjunto = Tipo de dados que são armazenados.

---

## 🧠 Analogia

-> Funciona como uma pasta do computador. A pasta possui um nome e reúne arquivos selecionados de acordo com algum critério. Os arquivos são os elementos do conjunto.

---

## Formas de representar um conjunto

### -> Listagem

Escrevemos diretamente os elementos:

A = {1,2,3,4,5}

### -> Regra de formação

Descrevemos a propriedade que todos os elementos precisam satisfazer:

A = {x ∈ N | 1 <= x <= 5}

Lemos:

"A é o conjunto dos elementos x que pertencem aos naturais, tais que x está entre 1 e 5."

Na anotação apareceu:

1 <= 1 <= 5

O valor central precisa ser **x**:

1 <= x <= 5

O símbolo **|** significa "tal que". Alguns materiais usam ponto e vírgula ou dois-pontos com o mesmo sentido.

### Diagrama

Podemos desenhar uma região e colocar seus elementos dentro dela. Isso é útil para visualizar conjuntos pequenos e relações entre vários conjuntos.

---

## Números Naturais (N)

São os números usados principalmente para contar quantidades:

N = {0,1,2,3,4,...}

O conjunto dos naturais não nulos é:

N* = {1,2,3,4,...}

O asterisco indica que retiramos o zero.

---

## Números Inteiros (Z)

Os números inteiros incluem os números naturais, seus correspondentes negativos e o zero:

Z = {…,−3,−2,−1,0,1,2,3,…}

Portanto:

N ⊂ Z

O símbolo **⊂** significa "é subconjunto de".

Todo número natural é inteiro, mas nem todo inteiro é natural.

Por exemplo:

-4 ∈ Z e -4 ∉ N

### Subconjuntos importantes

Z⁺ = {0,1,2,3,…}

Z⁺* = {1,2,3,…}

Z⁻ = {…,−3,−2,−1,0}

Z⁻* = {…,−3,−2,−1}

### Analogia

Imagine um elevador:

- andares acima do térreo: inteiros positivos;
- térreo: zero;
- subsolos: inteiros negativos.

Os naturais representam apenas o térreo e os andares superiores. Os inteiros também permitem representar os subsolos.

---

## Números Racionais (Q)

Um número é racional quando pode ser escrito como:

a/b

em que:

a, b ∈ Z e b ≠ 0

Exemplos:

2/1, −7/3, 4/8, 0,75

Os números inteiros também são racionais, pois todo inteiro pode ser dividido por 1:

5/1 = 5

-3/1 = -3

0/1 = 0

Portanto:

Z ⊂ Q

### Representações decimais

Um número racional apresenta uma representação decimal que:

- termina; ou
- continua repetindo um padrão.

Exemplos:

1/4 = 0,25

1/3 = 0,3333...

2/11 = 0,181818...

A repetição não torna um número irracional. Na verdade, uma dízima periódica é racional.

---

## Números Irracionais (I)

Um número irracional não pode ser escrito como uma fração de dois números inteiros:

a/b, com b ≠ 0

Sua representação decimal:

- possui infinitas casas;
- não termina;
- não apresenta um padrão periódico.

Exemplos:

π = 3,14159265...

√2 = 1,41421356...

e = 2,71828182...

A ideia não é que o número seja "indivisível". Um irracional pode ser dividido normalmente. O que não conseguimos é representá-lo exatamente por uma fração de dois inteiros.

### Comparação

| Número | Representação decimal | Classificação |
| ------- | --------------------: | ------------- |
| 1/4 | 0,25 | Racional |
| 1/3 | 0,333... | Racional |
| 2/11 | 0,181818... | Racional |
| √2 | 1,414213... | Irracional |
| π | 3,141592... | Irracional |

A diferença fundamental é a presença ou ausência de um padrão repetitivo.

---

## Números Reais (R)

São a união dos números racionais com os irracionais:

R = Q ∪ I

Isso significa que todo número real é:

- racional; ou
- irracional.

Outra forma de entender: os números reais são todos os números que podem ser posicionados na reta numérica.

```text
←───────────┬───────────┬───────────┬───────────→
           -2          -1           0           1
```

## 🧠 Analogia

Imagine que R seja uma grande cidade com dois bairros:

- O bairro dos racionais (Q);
- O bairro dos irracionais (I).

Um morador da cidade precisa morar exatamente em um desses bairros.

Um número real não pode ser simultaneamente racional e irracional:

Q ∩ I = ∅

### Organização até aqui

N ⊂ Z ⊂ Q ⊂ R

Os irracionais também pertencem aos reais, mas não pertencem aos racionais:

I ⊂ R

---

## Números Complexos (C)

Considere a equação:

x² = -1

Nos números reais, ela não possui solução, porque:

- um número positivo elevado ao quadrado resulta em positivo;
- um número negativo elevado ao quadrado também resulta em positivo;
- zero elevado ao quadrado resulta em zero.

Para resolver esse tipo de equação, foi definida a unidade imaginária **i**:

i² = -1

Consequentemente:

i = √-1

Um número complexo possui a forma:

x = a + bi

em que:

- a é a parte real;
- b é o coeficiente da parte imaginária;
- a, b ∈ R.

Exemplos:

3 + 2i

−4 + i

7 − 5i

6 + 0i = 6

O último exemplo mostra que todo número real também é complexo. Basta sua parte imaginária ser zero:

R ⊂ C

### Analogia

Pense nos conjuntos numéricos como ferramentas.

Os números naturais resolvem problemas de contagem.

Quando precisamos representar dívidas ou temperaturas negativas, ampliamos para os inteiros.

Quando precisamos representar partes, ampliamos para os racionais.

Quando aparecem valores como √2 e π, precisamos dos reais.

Quando precisamos resolver equações como x² = -1, ampliamos para os complexos.

Cada novo conjunto preserva os anteriores e acrescenta novas possibilidades.

### Aplicação prática

Números complexos são usados em áreas como:

- circuitos elétricos;
- processamento de sinais;
- telecomunicações;
- computação gráfica;
- transformadas de Fourier;
- análise de áudio e imagens.

---

# Visão Geral

N ⊂ Z ⊂ Q ⊂ R ⊂ C

| Conjunto | Exemplos | Ideia principal |
| --------- | -------- | ---------------- |
| N | 0, 1, 2, 3 | Contagem |
| Z | -3, -1, 0, 4 | Positivos, negativos e zero |
| Q | 1/2, -7, 0,25 | Pode ser escrito como fração de inteiros |
| I | √2, π, e | Decimal infinito e não periódico |
| R | -2, 1/3, √5, π | Todos os pontos da reta numérica |
| C | 3+2i, -i, 7 | Números da forma a + bi |

---

# Exercícios

## Exercício 1

Classifique cada número no menor conjunto possível entre N, Z, Q, I, R e C:

- 8 → Natural (N)
- −5 → Inteiro (Z)
- 3/4 → Racional (Q)
- 0,7777... → Dízima periódica → Racional (Q)
- √3 → Irracional (I)
- 4 + 2i → Complexo (C)

---

## Exercício 2

Analise as afirmações e explique, com suas palavras, se são verdadeiras ou falsas:

**Todo número inteiro é racional.**

-> Sim. A representação é:

N ⊂ Z ⊂ Q ⊂ R

---

**Todo número racional é inteiro.**

-> Não, pois existem números racionais fracionários e decimais.

---

**Toda representação decimal infinita é irracional.**

-> Não. Pode ser uma dízima periódica, portanto racional.

---

**Todo número real também é complexo.**

-> Sim, basta que a parte imaginária seja igual a zero.

---

**Um número pode ser simultaneamente racional e irracional.**

-> Não.

Q ∩ I = ∅
4+2i -> Complexos C

Exercício 2

Analise as afirmações e explique, com suas palavras, se são verdadeiras ou falsas:

Todo número inteiro é racional. -> Sim, A representação é N ⊂ Z ⊂ Q ⊂ R 
Todo número racional é inteiro. -> Não pois tem numeros racionais negativos e decimais
Toda representação decimal infinita é irracional. -> Não, pode ser uma Dizima periodica Racional
Todo número real também é complexo.-> Sim, basta a base imaginaria ser 0
Um número pode ser simultaneamente racional e irracional. -> Não,  Q ∩ I = ∅



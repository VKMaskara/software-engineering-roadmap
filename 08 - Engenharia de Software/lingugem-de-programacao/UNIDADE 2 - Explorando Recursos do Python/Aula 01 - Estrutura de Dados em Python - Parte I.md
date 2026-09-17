# Estrutura de Dados em Python - Parte I

## O que vai ser abordado?

-> Objetos do tipo sequência.

-> Listas (e list comprehension, map e filter).

-> Tuplas.

## Objetos do tipo sequência

-> Sequências: coleções ordenadas.

-> Sequência é uma coleção ordenada de valores, indexada por números inteiros.

-> O primeiro elemento do índice é 0; o último é `n - 1`. Strings, listas e tuplas são todas sequências.

-> Operadores comuns: `len(s)`, `x in s`, `s + t`, `n * x`, `s[i]`, `s[i:j]`, `s.count(x)`, `max(s)`.

## Strings: a sequência que você já usava

Strings são sequências de caracteres e aceitam todas as operações da lâmina anterior.

São imutáveis: depois de criadas, não dá para trocar um caractere específico.

Usamos colchetes para fatiar (slicing):

`texto[:5]` pega os 5 primeiros.

## Listas

Listas: a estrutura curinga.

Estruturas indexadas que começam no 0.

São mutáveis - você pode adicionar, remover e alterar elementos.

O método `index()` devolve a posição de um valor.

## List Comprehension, map e filter

-> Três jeitos pythônicos de transformar listas.

-> List comprehension: cria uma nova lista a partir de outra, em uma linha. `[item.lower() for item in linguagens]`

-> `map()`: aplica uma função (geralmente lambda) a cada elemento.

-> `filter()`: separa apenas os elementos que atendem a uma condição.

-> São essenciais quando você precisa transformar ou filtrar grandes dados.

## Tuplas

Tuplas: as primas imutáveis.

Tuplas também são sequências, mas imutáveis: depois de criadas, não mudam.

Três formas de criar:

-> `tupla1 = ()`

-> `tupla2 = ('a', 'b', 'c')`

-> `tupla3 = tuple([1, 2, 3])`

Úteis para dados que não podem ser alterados - e para retornar vários valores de uma função.

Fonte da Imagem: Gerada por Canva IA.

## Exemplo

```python
# Lista com o nome de todos os convidados (a lista pode ser alterada)
convidados = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"]

# Tupla com quem já confirmou (os confirmados são fixos/imutáveis)
confirmados = ("Bruno", "Eduarda")

# Lista para guardar quem ainda não confirmou
pendentes = []

for pessoa in convidados:
    if pessoa not in confirmados:
        pendentes.append(pessoa)

print("Pessoas que ainda não confirmaram:", pendentes)
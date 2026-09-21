# Introdução à biblioteca pandas

## O que vai ser abordado?

-> O que é o Pandas e por que aprender.

-> Séries: a estrutura unidimensional.

-> Leitura de dados estruturados (`read_xxx`).

## O que é o Pandas?

Biblioteca de código aberto para manipulação e análise de dados tabulares.

Construída sobre o NumPy - herda toda a eficiência numérica dele.

Duas estruturas principais: DataFrame (tabela) e Series (lista/coluna).

Lê e escreve em vários formatos: CSV, Excel, SQL, JSON, HTML e mais.

Permite filtrar, ordenar, agrupar e tratar dados ausentes - tudo de forma intuitiva.

## DataFrame

## Series: a coluna do Pandas

### Series: a estrutura unidimensional

Series é como uma lista, mas com índices nomeáveis e métodos prontos.

Cada elemento tem um valor e um índice associado.

Por padrão, os índices são 0, 1, 2 ... - mas podem ser nomes, datas, qualquer coisa.

Pense numa Series como uma coluna de uma planilha - com cabeçalho na lateral.

## Criando uma Series

### Três jeitos de criar uma Series

A partir de uma lista:

`pd.Series(data=[10, 20, 30])`

A partir de um dicionário: as chaves viram os índices automaticamente.

A partir de uma lista com índice customizado:

`pd.Series(valores, index=nomes)`.

Métodos prontos como `.mean()`, `.sum()`, `.max()` ficam disponíveis na hora.

## Exemplo

```python
# U3_A2

import pandas as pd

exemplo1 = [10, 20, 30, 40, 50, 60]
print(type(exemplo1))

serie1 = pd.Series(data=exemplo1)
print(serie1)

exemplo2 = {'A': 100, 'B': 200, 'C': 300, 'D': 500}
serie2 = pd.Series(data=exemplo2)
print(serie2)

# 4. Métodos prontos da Series
print("Média:", serie2.mean())
print("Soma:", serie2.sum())
print("Máximo:", serie2.max())
print("Mínimo:", serie2.min())
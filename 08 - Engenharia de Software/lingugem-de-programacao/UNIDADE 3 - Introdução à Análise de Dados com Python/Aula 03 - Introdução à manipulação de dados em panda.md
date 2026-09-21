# Introdução à manipulação de dados em Pandas

## O que vai ser abordado?

-> Métodos de leitura e escrita (`read_xxx` / `to_xxx`).

-> Captura e ingestão dos dados.

-> Extração de informações: `loc` e testes booleanos.

## Leitura e escrita: read e to

-> Lendo e escrevendo em vários formatos.

-> O Pandas tem famílias inteiras de funções para entrada e saída de dados.

-> Leitura - sempre começa com `pd.read`: `read_csv`, `read_json`, `read_excel`, `read_sql`, `read_html`, `read_parquet`...

-> Escrita - sempre `.to_`: `to_csv`, `to_json`, `to_excel`, `to_sql`, `to_html`...

-> Toda função `read_` devolve um DataFrame; toda `to_` salva um DataFrame em um destino.

> A biblioteca Pandas tem como principal propósito a manipulação de dados estruturados, como aqueles organizados em tabelas com linhas e colunas.

## Exemplo

```python
# U3_A3

import pandas as pd

url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='01-01-2025'&@dataFinalCotacao='09-21-2026'&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"

df = pd.read_json(url)

print(df.info())

df.head()

df = pd.json_normalize(df['value'])  # Reestrutura o JSON

df.head()

df.columns = ['compra', 'venda', 'data']

df.head()

df['spread'] = df['venda'] - df['compra']

df.head()

print(df.loc[0])

print(df.loc[[0, 5, 10]])

print(df.loc[0:4, ['data', 'venda']])

caro = df[df['venda'] > 6.00]

print(f"Dias com o dólar acima de R$ 6,00: {len(caro)}")
print(caro)

spread_alto = df[df['spread'] > 0.0005]

print(spread_alto[['data', 'compra', 'venda', 'spread']])

import matplotlib.pyplot as plt

df['data'] = pd.to_datetime(df['data'])

plt.figure(figsize=(12, 5))
plt.plot(df['data'], df['venda'], color="royalblue", linewidth=2)

plt.title('Cotação do Dólar (vendas) - jan a jun 2025')
plt.xlabel('Data')
plt.ylabel('R$')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
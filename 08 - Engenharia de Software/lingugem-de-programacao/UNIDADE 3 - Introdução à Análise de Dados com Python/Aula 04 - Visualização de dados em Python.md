# Visualização de dados em Python

## O que vai ser abordado?

-> Matplotlib em duas formas de uso.

-> O método `.plot()` do Pandas.

-> Seaborn: a extensão especializada do Matplotlib.

## Matplotlib em duas formas

-> Modo automático (pyplot) - o `plt` cria e gerencia figuras e eixos sozinho.

-> `plt.plot(dados1, dados2)`

-> Modo orientado a objetos - você cria figuras e eixos explicitamente e chama métodos sobre eles.

-> `fig, ax = plt.subplots()` e depois `ax.plot()`.

-> O modo OO dá mais controle, especialmente quando precisa de múltiplos gráficos lado a lado.

## .plot() do Pandas

-> Series e DataFrames têm um método `.plot()` embutido (construído sobre o Matplotlib).

-> Sintaxe simples: `df.plot(x='col1', y='col2', kind='bar')`.

-> Tipos disponíveis no `kind`: `bar`, `line`, `pie`, `box`, `hist`, `scatter`...

-> Atalho perfeito: você está no Pandas analisando, e um único método já gera o gráfico.
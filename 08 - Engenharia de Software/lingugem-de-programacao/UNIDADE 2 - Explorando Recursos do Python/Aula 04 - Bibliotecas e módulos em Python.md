# Bibliotecas e módulos em Python

## O que vai ser abordado?

-> Módulos e bibliotecas: o que são e como importar.

-> Classificação dos módulos (built-in, de terceiros e próprios).

-> Matplotlib: a biblioteca de visualização.

## Módulos e bibliotecas

### Módulos: blocos reutilizáveis

Módulo é um arquivo Python (`.py`) com funções e classes reutilizáveis.

Na prática, módulo e biblioteca são tratados como sinônimos.

Servem para organizar o código, evitar repetição e reaproveitar funcionalidades.

Exemplos: `math` (operações matemáticas), `os` (sistema operacional).

## Três formas de importar

### Três formas de importar um módulo

-> `import math` - usa como `math.sqrt(25)`.

-> `import math as m` - usa como `m.sqrt(25)` (apelido).

-> `from math import sqrt` - usa direto: `sqrt(25)` (só a função que importou).

A primeira e a segunda carregam tudo do módulo; a terceira carrega só o que você pediu.

---

## Três tipos de módulos

### Built-in, de terceiros e próprios

**Built-in:** já vem com o Python (`math`, `os`, `random`, `datetime`, `re`, `collections`).

**De terceiros:** criados pela comunidade, instalados via `pip install` (PyPI).

**Próprios:** você mesmo cria, em um arquivo `.py` separado, e importa no projeto.

Para projetos grandes, o ideal é combinar os três tipos.
# Funções em Python

## built-in functions

Funções embutidas (built-in functions) no Python são ferramentas pré-definidas que já vêm prontas para uso no núcleo da linguagem. [1] (https://www.amandanascimento.com/post/fun%C3%A7%C3%B5es-em-python-def), [2] (https://www.bosontreinamentos.com.br/programacao-em-python/lista-de-funcoes-built-in-do-python-funcoes-internas/)Você não precisa instalar ou importar nenhum módulo para usá-las. Para ver a lista completa oficial, consulte a Documentação Python de Funções Embutidas. [1] (https://www.youtube.com/watch?v=FxoTvyGeI6M&t=117), [2] (https://docs.python.org/pt-br/3.13/library/functions.html), [3] (https://www.bosontreinamentos.com.br/programacao-em-python/lista-de-funcoes-built-in-do-python-funcoes-internas/)

## Funções definidas pelo usuário

Quando o problema e especifico, criamos
nossa propria funcao com def.

Voce controla o nome, os parametros
(dados que ela recebe) e o retorno
(resultado que ela produz).

A palavra return devolve o resultado para
quem chamou a funçao.


## O operador de módulo (%)
0 % calcula o resto de uma divisão.

Em a % b, devolve o que sobra ao dividir a por b.

Truque classico: se numero % 2 == 0, o numero e par.

Util para criar funcoes de verificacao, como uma funcao "e
par?".

## Funções anonimas (lamoua)

O lambda cria uma funcao sem nome, em
uma única linha.

Ideal para uma acao simples, usada uma vez
SỐ.

Sintaxe: lambda parametros: expressão

notaTotal = 0
def cadastrarnotas():
  nota_1 = int(input("Digite a primeira nota:\n"))
  nota_2 = int(input("Digite a segunda nota:\n"))
  nota_3 = int(input("Digite a terceira nota: \n"))
  nota_4 = int(input("Digite a quarta nota:\n"))

  print("-"*50)

  notaTotal = nota_1 + nota_2 + nota_3 + nota_4


  calculoMedia(notaTotal)
# Funções em Python

## Built-in Functions

Funções embutidas (built-in functions) no Python são ferramentas pré-definidas que já vêm prontas para uso no núcleo da linguagem. [1](https://www.amandanascimento.com/post/fun%C3%A7%C3%B5es-em-python-def), [2](https://www.bosontreinamentos.com.br/programacao-em-python/lista-de-funcoes-built-in-do-python-funcoes-internas/)

Você não precisa instalar ou importar nenhum módulo para usá-las. Para ver a lista completa oficial, consulte a Documentação Python de Funções Embutidas. [1](https://www.youtube.com/watch?v=FxoTvyGeI6M&t=117), [2](https://docs.python.org/pt-br/3.13/library/functions.html), [3](https://www.bosontreinamentos.com.br/programacao-em-python/lista-de-funcoes-built-in-do-python-funcoes-internas/)

## Funções definidas pelo usuário

Quando o problema é específico, criamos nossa própria função com `def`.

Você controla o nome, os parâmetros (dados que ela recebe) e o retorno (resultado que ela produz).

A palavra `return` devolve o resultado para quem chamou a função.

## O operador de módulo (%)

`%` calcula o resto de uma divisão.

Em `a % b`, devolve o que sobra ao dividir `a` por `b`.

Truque clássico: se `numero % 2 == 0`, o número é par.

Útil para criar funções de verificação, como uma função "é par?".

## Funções anônimas (lambda)

O `lambda` cria uma função sem nome, em uma única linha.

Ideal para uma ação simples, usada uma vez.

Sintaxe:

```python
notaTotal = 0

def cadastrarNotas():
    nota_1 = int(input("Digite a primeira nota:\n"))
    nota_2 = int(input("Digite a segunda nota:\n"))
    nota_3 = int(input("Digite a terceira nota:\n"))
    nota_4 = int(input("Digite a quarta nota:\n"))

    print("-" * 50)

    notaTotal = nota_1 + nota_2 + nota_3 + nota_4

    calculoMedia(notaTotal)


def calculoMedia(notaTotal):
    media = notaTotal / 4

    print(f"Sua média é {media}")

    if media >= 6:
        print("Aprovado")
    else:
        print("Reprovado")


cadastrarNotas()
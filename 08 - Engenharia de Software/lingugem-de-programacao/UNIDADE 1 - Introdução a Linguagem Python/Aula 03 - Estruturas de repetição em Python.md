# Estruturas de repetição em Python

## Vamos abordar:

-> Estrutura de repetição `for`.

-> Estrutura de repetição `while`.

-> Controle de repetição: `range`, `break`, `continue`.

## Estrutura de repetição `for`

-> O `for` percorre uma sequência de elementos, como uma lista, e executa o mesmo bloco para cada item.

-> Ideal para quando sabemos quantas vezes vamos repetir.

-> A variável do loop assume, a cada volta, o valor de um elemento.

## Estrutura de repetição `while`

-> Ela repete um bloco enquanto uma condição for verdadeira.

-> Ideal para quando não sabemos quantas vezes vai se repetir (usuário escolhe).

-> Roda até a afirmação deixar de ser verdadeira.

## Função `range`

-> Gerando sequência de números.

## `break` e `continue`

`break` e `continue`: controlando o loop.

-> `break`: interrompe o loop imediatamente, antes de ele terminar.

-> `continue`: pula apenas a iteração atual e segue para a próxima.

Ambos são acionados por uma condição, dando mais flexibilidade ao controle das repetições.

## Exemplos

```python
numeros = [1, 2, 3, 4, 5]

for numero in numeros:
    print(f"Camiseta: {numero}")

numero = int(input("Digite um número (ou 0 para sair): "))

while numero != 0:
    if numero % 2 == 0:
        print("O número é par")
    else:
        print("O número é ímpar")

    numero = int(input("Digite um número (ou 0 para sair): "))

for x in range(5):
    print(x)

filmes = ["1", "2", "3", "4", "5"]

print("Bem-vindo à classificação de filmes")
print("Você tem 5 filmes para classificar")
print("Digite '0' a qualquer momento para parar.\n")

for filme in filmes:
    classificacao = input(
        f"Como você classifica '{filme}' de 1 a 5 (ou 0 para sair): "
    )

    if classificacao == "0":
        print("Que pena")
        break

    classificacao = int(classificacao)

    if classificacao < 1 or classificacao > 5:
        print("Nota inválida")
    else:
        print(f"Você classificou {filme} com {classificacao} estrelas.\n")

print("Obrigado!")
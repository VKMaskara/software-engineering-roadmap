# Estrutura de Dados em Python - Parte II

## O que vai ser abordado?

-> Sets (conjuntos): coleções sem repetição.

-> Dicionários (dict): pares chave-valor.

-> Arrays NumPy: a base da computação científica.

## Sets: conjuntos sem repetição

-> Sets: a estrutura de elementos únicos.

-> Sets representam conjuntos matemáticos: coleção sem repetição.

-> Ideais para eliminar duplicatas e testar pertencimento.

-> Métodos principais: `add(valor)` e `remove(valor)`.

-> Criar: `set1 = {'a', 'b', 'c'}` ou `set()` para um conjunto vazio.

## Dicionários (dict)

-> Dicionários: pares chave-valor.

-> Estruturas que associam chave a valores.

-> Mutáveis: dá para alterar valores, adicionar e remover chaves.

-> Acesso: `dicionario[chave]` para ler e `dicionario[chave] = valor` para atribuir.

-> Servem perfeitamente para representar "coisas com atributos" - um produto, um usuário, um participante.

## Quatro jeitos de criar um dicionário

Criando dicionários: quatro caminhos.

Vazio + atribuição: `dici = {}` e depois `dici['nome'] = "Maria"`.

Direto com chave-valor: `dici = {'nome': 'Maria', 'idade': 25}`.

Com lista de tuplas: `dict([('nome', 'Maria'), ('idade', 25)])`.

Com a função `zip`: `dict(zip(['nome', 'idade'], ['Maria', 25]))`.

Todos produzem o mesmo dicionário no final.

## Arrays NumPy: a porta para a computação científica

NumPy: a biblioteca dos dados em massa.

Biblioteca essencial para computação científica em Python.

Trabalha com arrays multidimensionais de forma muito mais eficiente que listas.

No Colab e no Anaconda, já vem instalada.

-> Basta `import numpy as np`.

Operações em todo o array em uma linha:

-> Elevar ao quadrado.

-> Somar.

-> Encontrar o máximo etc.

```python
# U2_A2

meu_conjunto = set()

meu_conjunto.add(10)

meu_conjunto

meu_conjunto.add(20)
meu_conjunto.add(30)

meu_conjunto.remove(20)

meu_conjunto

elemento = 20

if elemento in meu_conjunto:
    print(f"O elemento {elemento} está no conjunto.")
else:
    print(f"O elemento {elemento} não está no conjunto.")

numeros_repetidos = [1, 2, 2, 2, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 4]

numeros_repetidos

unicos = set(numeros_repetidos)

unicos

dici_1 = {}

dici_1['nome'] = 'Maria'
dici_1['idade'] = 25

dici_1

dici_2 = {'nome': 'Lucas', 'idade': 25}

dici_2

dici_3 = dict(nome='Maria', idade=25)

dici_3

dici_4 = dict(zip(['nome', 'idade'], ['Maria', 25]))

dici_4

# Acessando e alterando valores
produto = {'nome': 'Notebook', 'preco': 3500.00, 'estoque': 12}

print("Nome:", produto['nome'])
print("Preço:", produto['preco'])

# Alterando o estoque
produto['estoque'] = 10

# Adicionando uma chave nova
produto['categoria'] = "Informática"

print(produto)

# 5. NumPy - importando e criando um array
import numpy as np

my_array = np.array([1, 2, 3, 4, 5])

print("Array original:")
print(my_array)

# Array original: [1 2 3 4 5]

# 6. NumPy - operações em massa
squared_array = my_array ** 2
sum_of_elements = np.sum(my_array)

print("\nArray ao quadrado:")
print(squared_array)

print("\nSoma dos elementos:")
print(sum_of_elements)

# Acessando um elemento por índice
print("\nElemento no índice 2:", my_array[2])

# Cada elemento ao quadrado
# Soma de todos os elementos
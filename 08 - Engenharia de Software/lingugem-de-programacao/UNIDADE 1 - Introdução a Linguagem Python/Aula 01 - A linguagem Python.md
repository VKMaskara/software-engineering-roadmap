# A linguagem Python

-> Introdução à linguagem.

## O que é o Python?

-> Linguagem de programação versátil e fácil de aprender.

-> Criada por Guido van Rossum e lançada em 1991.

-> Orientada a objetos, clara e poderosa, comparável a Perl, Ruby, Scheme ou Java.

-> Uma das linguagens mais populares por conta da legibilidade e da sintaxe simples.

## Por que escolher Python?

-> Desenvolvimento Web.

-> Automação de tarefas.

-> Aprendizado de máquina.

-> Análise de dados.

**Filosofia de Guido: o código deve ser fácil de ler, pois é lido com mais frequência do que é escrito.**

## O que é orientação a Objeto?



# 1. Nosso primeiro programa

```python
print("Hello World")
```

# Criando variáveis de tipos diferentes

```python
x = 10

nome = "Kaue"

nota = 8.75

faz_inscricao = True

print(x)

print(nome)

print(nota)

print(faz_inscricao)

print(type(x))

print(type(nome))

print(type(nota))

print(type(faz_inscricao))
```

```python
nome = input("Digite o seu nome: ")

print(f"Olá {nome}, Bem-Vindo!")
```

```python
nota_1 = int(input("Digite a nota: "))

nota_2 = int(input("Digite a nota: "))

nota_3 = int(input("Digite a nota: "))

nota_4 = int(input("Digite a nota: "))

media = (nota_1 + nota_2 + nota_3 + nota_4) / 4

print(media)

if media >= 6:
    print("Aprovado")
else:
    print("Reprovado")
```
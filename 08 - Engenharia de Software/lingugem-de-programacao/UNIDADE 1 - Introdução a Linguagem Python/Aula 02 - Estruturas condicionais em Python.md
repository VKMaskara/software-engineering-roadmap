# Estruturas condicionais em Python

## Vamos abordar:

-> Operadores relacionais.

-> Estruturas lógicas (`and`, `or`, `not`).

-> Estruturas condicionais: `if`, `elif`, `else`.

## Operadores relacionais

Servem para comparar dois valores e responder verdadeiro ou falso:

-> `<` menor que.

-> `<=` menor ou igual.

-> `>` maior que.

-> `>=` maior ou igual.

-> `==` igual.

-> `!=` diferente.

Já usamos um deles na Aula 1: a média `>= 6` para aprovar o aluno.

## Estruturas lógicas

-> Estruturas lógicas: combinando condições.

-> Operadores booleanos unem várias comparações.

* **`and` (E): verdadeiro somente quando as duas condições forem verdadeiras.**

* **`or` (OU): verdadeiro quando pelo menos uma das condições for verdadeira.**

* **`not` (NÃO): faz a inversão do valor, de verdadeiro para falso e vice-versa.**

## Estruturas condicionais

`if`, `elif` e `else`: o caminho do programa.

-> `if`: se a condição for verdadeira, executa este bloco.

-> `elif`: testa uma nova condição, caso a anterior seja falsa.

-> `else`: o que fazer quando nenhuma condição foi atendida.

A partir desse conhecimento, faremos uma aplicação dos conceitos mencionados por meio de um estudo de caso.

Suponha que você trabalhe em uma empresa que cuida de cinemas. Em uma reunião com a diretoria, foi solicitada a implementação de um sistema de autoatendimento. Como se trata de algo novo na rede, você será responsável por elaborar um protótipo simples.

A diretoria quer que o projeto a ser desenvolvido seja baseado na idade dos clientes e contenha a informação de disponibilidade de ingressos.

```python
idade = int(input("Qual a sua idade?: "))

if idade <= 12:
    print("Faixa infantil:")
    print("Filme disponível: Bob Esponja")
    filme_escolhido = "Bob Esponja"

elif idade > 12 and idade < 18:
    print("Faixa adolescente:")
    print("Filme disponível: Gente Grande")
    filme_escolhido = "Gente Grande"

else:
    print("Faixa adulta:")
    print("Filme disponível: Lagoa Azul")
    filme_escolhido = "Lagoa Azul"

if filme_escolhido == "Bob Esponja":
    ingressos = 10
    print(f"Para o filme do Bob Esponja temos {ingressos}")

    pergunta = input("Deseja reservar ingresso? S/N: ").upper()

    if pergunta == "S":
        print("Ingresso reservado!")
        ingressos -= 1
        print(f"Ingressos restantes: {ingressos}")

elif filme_escolhido == "Gente Grande":
    ingressos = 15
    print(f"Para o filme Gente Grande temos {ingressos}")

    pergunta = input("Deseja reservar ingresso? S/N: ").upper()

    if pergunta == "S":
        print("Ingresso reservado!")
        ingressos -= 1
        print(f"Ingressos restantes: {ingressos}")

else:
    ingressos = 5
    print(f"Para o filme Lagoa Azul temos {ingressos}")

    pergunta = input("Deseja reservar ingresso? S/N: ").upper()

    if pergunta == "S":
        print("Ingresso reservado!")
        ingressos -= 1
        print(f"Ingressos restantes: {ingressos}")
```

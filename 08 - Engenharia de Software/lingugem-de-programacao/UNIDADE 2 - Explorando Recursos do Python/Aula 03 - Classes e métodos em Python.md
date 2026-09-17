# Classes e métodos em Python

## O que vai ser abordado?

-> O que é orientação a objetos (POO).

-> Classes em Python: atributos, métodos e o construtor.

-> Herança em Python.

---

## O que é Orientação a Objetos

-> Orientação a Objetos: o paradigma.

Programas construídos em torno de objetos - entidades do mundo real.

Toda classe tem atributos (dados/estado) e métodos (comportamentos/ações).

Quatro conceitos principais: abstração, encapsulamento, herança e polimorfismo.

Pense numa classe como a planta de uma casa; os objetos são as casas construídas a partir dela.

## Classes em Python: a sintaxe

### Classes em Python

Palavra-chave `class` seguida do nome da classe.

O método `__init__()` é o construtor, chamado automaticamente ao criar um objeto.

`self` é a referência ao próprio objeto - sempre o primeiro parâmetro dos métodos.

Atributos vivem em `self.atributo`; métodos são funções dentro da classe.

## Herança em Python

### Herança: reaproveitando código

Uma classe-filha herda atributos e métodos de uma classe-pai.

Sintaxe:

`class ClasseFilha(ClassePai):`

Python suporta herança múltipla: várias classes-pai entre parênteses.

A classe-filha pode adicionar novos comportamentos ou sobrescrever os herdados.

Benefícios: reutilização de código, extensibilidade e hierarquia organizada.

Os programas são construídos em torno de objetos, que são as unidades fundamentais. Uma classe atua como um modelo para um objeto. Pode-se pensar em uma classe como o projeto de uma casa, no qual um arquiteto define todos os detalhes da estrutura. A classe organiza os dados e comportamentos que os objetos de uma classe específica terão.

Confira, a seguir, um exemplo de classe:

### Classe: Pessoa

**Atributos (dados):**

Nome:

Idade:

Gênero:

**Métodos (comportamentos):**

Cumprimentar: saúda como “Olá, meu nome é”.

Aniversário: aumenta a idade em 1.

### Objeto 1: Pessoa1

**Atributos (dados):**

Nome: João

Idade: 30

Gênero: Masculino

**Métodos (comportamentos):**

Cumprimentar: saúda como “Olá, meu nome é João”.

Aniversário: aumenta a idade em 1.

Para as classes, temos os seguintes “componentes” principais:

**Atributos:** são os dados que representam o estado do objeto, como nome e idade.

**Métodos:** definem o comportamento do objeto, indicando as ações que ele pode executar, como cumprimentar ou fazer login.

**Encapsulamento:** combina atributos e métodos em uma entidade, permitindo controlar o acesso a atributos por meio de métodos.

**Herança:** possibilita que uma classe herde atributos e métodos de outra, promovendo o reúso de código e a organização hierárquica, como na relação entre as classes pessoa, funcionário e cliente.

**Polimorfismo:** refere-se à capacidade de várias classes responderem de forma diferente a uma mesma mensagem, graças à herança e às respostas específicas de cada classe às mensagens.

## Benefícios da herança

**Reutilização de código:** a herança permite que você reutilize o código existente, aproveitando a estrutura e a funcionalidade de classes-pai em suas subclasses.

**Extensibilidade:** você pode estender ou adicionar comportamentos específicos às classes-filhas sem modificar as classes-pai, mantendo a coesão e a organização do código.

**Hierarquia de classes:** é possível criar uma hierarquia de classes na qual classes-filhas podem herdar características comuns de classes-pai e, por sua vez, serem herdadas por outras classes.
# Aula 06 — Fluxo de Execução

---

# 🎯 Objetivo da Aula

Ao final desta aula você será capaz de:

- Entender como o computador percorre um algoritmo;
- Saber em qual ordem cada instrução é executada;
- Compreender como estruturas condicionais alteram esse fluxo;
- Identificar o caminho que um algoritmo percorre do início ao fim;
- Preparar a base para aprender depuração e estruturas de repetição.

---

# 📖 Introdução

## Como um computador decide qual linha executar?

De maneira geral, ao iniciar os estudos, eu mesmo pensei que o computador entendia o código completo de uma vez. Porém, na realidade, ele faz algo bem mais simples: executa uma instrução por vez, seguindo a ordem em que elas aparecem.

Exemplo:

Imagine este algoritmo:

```javascript
let nome = "Kauê";

console.log(nome);

console.log("Fim");
```

É literalmente isso:

```text
Linha 1
   ↓
Executa
   ↓
Linha 2
   ↓
Executa
   ↓
Linha 3
   ↓
Executa
   ↓
Fim
```

Em resumo, o computador é como um bom funcionário que executa uma instrução por vez, e não todas as instruções ao mesmo tempo. Chamamos isso de **fluxo sequencial**.

---

## Fluxo Sequencial

É o que chamamos de código linear, ou seja, códigos mais simples por não conterem nenhuma estrutura de decisão ou repetição.

Visualmente:

```text
Início
   ↓
Linha 1
   ↓
Linha 2
   ↓
Linha 3
   ↓
Linha 4
   ↓
Fim
```

Esse é o fluxo mais simples possível.

---

## Quando o fluxo muda?

Quando usamos uma estrutura de decisão, por exemplo:

```javascript
let idade = 16;

if (idade >= 18) {
    console.log("Pode dirigir");
}

console.log("Fim");
```

O computador executa:

```text
Linha 1
   ↓
Linha 2
   ↓
idade >= 18 ?
   ↓
False
   ↓
Ignora o bloco do if
   ↓
Vai para a próxima linha
   ↓
console.log("Fim")
```

Perceba uma coisa importante:

O computador não para.

Ele apenas escolhe outro caminho.

---

## Visualizando o fluxo

### Sem condição

```text
Início
   ↓
Linha 1
   ↓
Linha 2
   ↓
Linha 3
   ↓
Fim
```

### Com condição

```text
          Início
             │
             ▼
         Condição?
         │       │
       Sim      Não
         │       │
         ▼       │
   Executa IF    │
         │       │
         └────┬──┘
              ▼
          Continua
```

Veja que os dois caminhos voltam para o mesmo fluxo.

Isso é extremamente importante.

---

## Mais um exemplo (if / else)

```javascript
let nota = 5;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log("Fim");
```

Temos o seguinte fluxo:

```text
Início
   ↓
nota >= 7 ?
   ↓
False
   ↓
Executa ELSE
   ↓
console.log("Reprovado")
   ↓
Sai do bloco if/else
   ↓
console.log("Fim")
```

---

# 📌 Observação

O `if` **não encerra o programa**.

Esse é um erro muito comum.

Imagine:

```javascript
if (condição) {

}
```

Muitos alunos pensam:

> "Terminou o if, terminou o programa."

Não.

Terminou apenas aquele bloco.

Depois disso, o algoritmo continua executando as próximas linhas.

---

## Fluxo de Execução ≠ Teste de Mesa

### Fluxo de Execução

Responde:

> Qual caminho o algoritmo percorreu?

### Teste de Mesa

Responde:

> Qual era o valor das variáveis em cada momento?

### Por que aprender isso?

Porque, quando um algoritmo não funciona, precisamos responder duas perguntas:

- O computador percorreu o caminho correto?
- As variáveis tinham os valores esperados?

Se souber responder essas duas perguntas, você resolve a maioria dos erros de lógica.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- O computador executa uma instrução por vez.
- O fluxo padrão é sequencial.
- Estruturas condicionais alteram o caminho do algoritmo.
- Depois que um bloco termina, o algoritmo continua sua execução.
- Fluxo de Execução mostra o caminho percorrido; Teste de Mesa mostra os valores das variáveis.
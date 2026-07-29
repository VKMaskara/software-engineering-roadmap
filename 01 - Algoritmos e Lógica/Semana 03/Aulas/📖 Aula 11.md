# Aula 12 — Estrutura de Repetição `for`

---

# 🎯 Tema

- O laço de repetição `for`.

---

# 📖 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Entender como funciona o `for`;
- Identificar suas três partes fundamentais;
- Saber quando utilizar `for`;
- Comparar `for` e `while`;
- Fazer Teste de Mesa com um `for`;
- Evitar erros comuns.

---

# 🧠 Relembrando o `while`

Na Aula 10 vimos a seguinte estrutura:

```javascript
let contador = 1

while (contador <= 5) {
    console.log(contador)
    contador++
}
```

---

Nessa estrutura temos três pontos importantes:

1. A criação da variável;
2. A condição do loop;
3. A atualização do contador.

Eles sempre vão aparecer juntos na estrutura `while`, mas em momentos diferentes.

Diferente do `for`...

---

# O que é o `for`?

-> O `for` é uma estrutura de repetição utilizada quando sabemos quantas vezes queremos repetir uma tarefa.

Uma definição seria:

> Para cada repetição, execute este bloco de código até que a condição deixe de ser verdadeira.

---

As definições entre `while` e `for` são parecidas. A diferença está na forma de uso, sendo o `while` utilizado quando não sabemos quantas vezes a repetição ocorrerá e o `for` quando sabemos.

A principal diferença, na minha opinião, está na estrutura:

```javascript
for (inicialização; condição; atualização) {
    // código
}
```

Repare que as três partes acontecem na mesma linha.

---

## 1. Inicialização

É nessa parte que criamos a variável de controle.

```javascript
let contador = 1
```

---

## 2. Condição

Enquanto essa condição for verdadeira, o laço continua.

```javascript
contador <= 5
```

---

## 3. Atualização

Após executar o bloco, atualizamos a variável.

```javascript
contador++
```

---

# Primeiro exemplo

```javascript
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador)
}
```

Saída:

```text
1
2
3
4
5
```

---

# Fluxo de Execução

```text
Início
   |
   v
contador = 1
   |
   v
contador <= 5 ?
   |
Sim ----------------------+
 |                        |
 v                        |
Mostrar contador          |
 |                        |
 v                        |
contador++                |
 |                        |
 +------------------------+
 |
Não
 |
 v
Fim
```

Perceba que o fluxo é basicamente o mesmo. O que muda é a forma como escrevemos.

---

# Fazendo um Teste de Mesa

```javascript
for (let i = 1; i <= 3; i++) {

    console.log(i)

}
```

| Repetição | Valor de `i` | Condição | Saída |
| ---------- | ------------ | -------- | ----- |
| Inicial    | 1            | 1 <= 3 ✔ | 1     |
| Segunda    | 2            | 2 <= 3 ✔ | 2     |
| Terceira   | 3            | 3 <= 3 ✔ | 3     |
| Próxima    | 4            | 4 <= 3 ✘ | Fim   |

---

# Comparando `while` e `for`

Eles fazem exatamente a mesma coisa. O que muda é a organização da forma de escrever.

---

# Quando usar `for`?

Sempre que você souber exatamente quantas repetições serão necessárias.

Exemplos:

- Contar de 1 até 100;
- Imprimir uma tabuada;
- Mostrar os 12 meses do ano;
- Percorrer uma lista de alunos;
- Repetir um cálculo 10 vezes.

---

# Quando NÃO usar `for`?

Imagine um sistema de login.

Você não sabe se o usuário acertará a senha:

- na primeira tentativa;
- na terceira;
- na décima.

Logo:

Não sabemos quantas repetições existirão.

Neste caso, o ideal continua sendo o `while`.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- `for` é uma estrutura de repetição;
- Ele possui:
  - inicialização;
  - condição;
  - atualização;
- É indicado quando sabemos quantas repetições existirão;
- Seu funcionamento é praticamente igual ao do `while`, mudando principalmente a forma de organizar o código.
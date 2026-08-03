# Aula 12 — Estrutura de Repetição `do...while`

---

# 🎯 Tema

O laço de repetição `do...while`.

---

# 📖 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Entender como funciona o `do...while`;
- Comparar `do...while` com `while`;
- Saber quando utilizar cada um;
- Identificar sua principal característica;
- Fazer Teste de Mesa utilizando `do...while`;
- Evitar erros comuns.

---

# 🧠 Relembrando o `while`

Só para contextualizar o `while`:

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

O funcionamento é:

```text
Verifica a condição
        ↓
Se for verdadeira
        ↓
Executa o bloco
        ↓
Volta para verificar novamente
```

Repare que, ao fazermos o Teste de Mesa, percebemos que, se a condição começar como falsa, ele não executará o bloco.

Exemplo:

```javascript
let contador = 10;

while (contador <= 5) {
    console.log(contador);
}
```

Saída:

```text
(nada)
```

Porque a condição já era falsa.

---

# 🧠 O problema que o `do...while` resolve

Imagine um caixa eletrônico.

Antes de perguntar se deseja continuar, ele precisa mostrar o menu.

Ou imagine um sistema de login.

Antes de verificar se o usuário deseja tentar novamente, ele precisa permitir pelo menos uma tentativa.

Nessas situações, queremos que o bloco execute uma vez obrigatoriamente.

Foi para isso que surgiu o `do...while`.

---

# O que é o `do...while`?

O `do...while` é uma estrutura de repetição que:

> Executa primeiro o bloco de código e somente depois verifica a condição.

Em outras palavras:

```text
Faça
 ↓
Verifique
 ↓
Repita, se necessário
```

---

# Estrutura

```javascript
do {

    // código

} while (condição);
```

Observe a diferença.

No `while`:

```text
while
  ↓
código
```

No `do...while`:

```text
código
  ↓
while
```

---

# Primeiro exemplo

```javascript
let contador = 1;

do {

    console.log(contador);

    contador++;

} while (contador <= 5);
```

Saída:

```text
1
2
3
4
5
```

Até aqui parece igual ao `while`.

Mas veja o próximo exemplo.

---

# Exemplo mostrando a diferença

```javascript
let contador = 10;

do {

    console.log(contador);

} while (contador <= 5);
```

Saída:

```text
10
```

Mesmo sendo falsa a condição:

```text
10 <= 5
```

O bloco foi executado.

Porque a verificação acontece depois.

---

# Fluxo de Execução

```text
Início
   |
   v
Executa o bloco
   |
   v
Verifica a condição
   |
Sim ----------------------+
 |                        |
 |                        |
 +------------------------+
 |
Não
 |
 v
Fim
```

Perceba que agora o fluxo mudou.

No `while`, a condição vem antes.

No `do...while`, ela vem depois.

Essa é a única diferença de funcionamento.

---

# Comparando as três estruturas

## `while`

Quando não sabemos quantas vezes repetiremos.

- Primeiro verifica.
- Depois executa.

---

## `for`

Quando sabemos exatamente quantas repetições existirão.

- Inicialização, condição e atualização ficam organizadas em uma única linha.

---

## `do...while`

Quando o bloco precisa executar pelo menos uma vez, independentemente da condição inicial.

---

# Quando usar `do...while`?

Exemplos:

- Menu de sistemas;
- Caixa eletrônico;
- Jogos;
- Perguntar se deseja continuar;
- Primeiro acesso ao sistema.

Sempre que existir uma ação obrigatória antes da validação da condição.

---

# 📌 Resumo da Aula

Hoje aprendemos que:

- `do...while` é uma estrutura de repetição;
- Primeiro executa o bloco;
- Depois verifica a condição;
- Sempre executa pelo menos uma vez;
- A principal diferença para o `while` está na ordem da verificação.
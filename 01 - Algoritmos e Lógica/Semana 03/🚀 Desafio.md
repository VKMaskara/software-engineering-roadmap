# 🚀 Desafio da Aula

## Enunciado

Sem escrever código.

Descreva um algoritmo para um caixa eletrônico.

O sistema deve:

- Perguntar se o cliente deseja realizar uma operação.
- Caso a resposta seja **Sim**, permitir que ele realize a operação e perguntar novamente.
- Caso a resposta seja **Não**, encerrar o atendimento.

O objetivo não é utilizar `while` ou `for`, mas descrever a lógica da repetição utilizando apenas linguagem natural.

---

## Resposta

```text
Início
  |
  v
Declarar variáveis
  |
  v
Perguntar se deseja realizar uma operação
      |                     |
     Sim                   Não
      |                     |
      v                     v
Realizar a transação       Fim
      |
      v
Transação realizada
      |
      v
Volta para a pergunta:
"Deseja realizar outra operação?"
```

# 🚀 Desafio da Aula 10

Você foi contratado para analisar um sistema de login.

Sem escrever código inicialmente, descreva a lógica utilizando linguagem natural.

O sistema deve:

- Perguntar se o usuário deseja fazer login.
- Caso responda **Sim**, solicitar usuário e senha.
- Se os dados forem válidos, permitir o acesso.
- Se forem inválidos, informar o erro e perguntar novamente se deseja tentar.
- Caso responda **Não**, encerrar o sistema.

---

## Lógica em linguagem natural

```text
Início
   |
   v
Declarar variáveis
   |
   v
Deseja realizar login?
      |                       |
     Não                     Sim
      |                       |
      v                       v
     Fim          Solicitar usuário e senha
                              |
                              v
                     Dados válidos?
                        |          |
                       Sim        Não
                        |          |
                        v          v
                Acesso liberado   Informar erro
                                      |
                                      v
                          Deseja tentar novamente?
                                |               |
                               Sim             Não
                                |               |
                                |               v
                                |              Fim
                                |
                                └───────────────► Volta para solicitar usuário e senha
```

---

## Algoritmo

```javascript
let resposta = prompt("Você deseja fazer login? (s/n)").trim().toLowerCase();

if (resposta === "s" || resposta === "sim") {

    while (true) {

        let usuario = prompt("Digite o usuário:").toLowerCase();
        let senha = prompt("Digite a senha:");

        if (usuario === "kaue" && senha === "123456") {

            console.log("Acesso concedido!");
            break;

        } else {

            let resp = prompt("Senha incorreta. Deseja tentar novamente? (s/n)")
                .trim()
                .toLowerCase();

            if (resp === "n" || resp === "nao" || resp === "não") {

                console.log("Encerrando o programa...");
                break;

            }
        }
    }

} else {

    console.log("Encerrando o programa...");

}
```
# 🚀 Desafio da Aula 11

Você foi contratado para desenvolver um sistema que exibe os assentos de um cinema.

## Sem escrever código inicialmente

### Descreva, em linguagem natural, como o sistema faria para mostrar os assentos de 1 até 20.

O sistema inicia a contagem no assento 1. Enquanto o número do assento for menor ou igual a 20, exibe o número do assento e passa para o próximo. O processo continua até que todos os assentos de 1 a 20 sejam mostrados.

---

### Explique por que `for` é mais adequado do que `while` para esse problema.

Porque, neste caso, sabemos exatamente onde o loop termina.

---

### Depois, escreva um algoritmo utilizando `for` que mostre os números dos assentos de 1 até 20.

> Vou escrever de forma simples, pois não foram dadas muitas regras de negócio.

```javascript
for (let cadeiras = 1; cadeiras <= 20; cadeiras++) {
    console.log(`Cadeira de Nº ${cadeiras}`);
}
```


# 🚀 Desafio Integrador — Semana 03

## Situação

Você foi contratado para desenvolver a lógica de um sistema de uma biblioteca.

O sistema possui as seguintes funcionalidades:

- Ao iniciar, o menu deve aparecer pelo menos uma vez.
- O usuário pode escolher uma das opções:
  - Consultar livros;
  - Realizar empréstimo;
  - Devolver livro;
  - Sair.
- Após realizar qualquer operação (exceto **"Sair"**), o menu deve aparecer novamente.
- Quando o usuário escolher **Sair**, o sistema é encerrado.
- Ao consultar livros, o sistema deve listar os 30 livros cadastrados.
- Caso o usuário escolha uma opção inválida, o menu deve ser exibido novamente.

---

# Parte 1 — Análise

## Sem escrever código inicialmente, responda:

### 1. Qual estrutura de repetição você utilizaria para controlar o menu principal?

**Explique o motivo.**

`do...while`, pois o menu precisa aparecer pelo menos uma vez.

---

### 2. Qual estrutura utilizaria para mostrar os 30 livros cadastrados?

**Explique o motivo.**

`for`, pois sei exatamente quando o loop vai parar.

---

### 3. Existem duas estruturas de repetição diferentes nesse sistema?

Se sim, explique onde cada uma seria utilizada.

Sim, pois temos uma regra de negócio para o menu, onde ele tem que ser executado pelo menos uma vez e o usuário vai escolher se repete ou não, e outra para exibir os livros, onde temos 30 cadastrados.

---

# Parte 2 — Fluxo de Execução

Descreva, em linguagem natural, como seria o fluxo completo do sistema.

Você pode utilizar texto ou um fluxograma, como vem fazendo nas últimas aulas.

```text
INÍCIO
   |
   v
Declarar variáveis
   |
   v
Mostrar menu de opções
   |
   v
Qual opção escolheu?
   |
   +-------------------+---------------------+---------------------+-------------------------+
   |                   |                     |                     |                         |
   v                   v                     v                     v                         v
1. Consultar       2. Emprestar      3. Devolver livro        4. Sair              Opção inválida
livros                 |                     |                     |                         |
   |             Escolher livro      Escolher livro             Encerrar          Mostrar "Opção inválida"
   |                   |                     |                     |                         |
Exibir livros     Livro reservado      Livro devolvido           Fim               Voltar para o menu
   |                   |                     |                                               |
   +-------------------+---------------------+-----------------------------------------------+
                                   |
                                   v
                          Voltar para o menu
```

---

# Parte 3 — Implementação

Agora escreva um algoritmo em JavaScript representando essa lógica.

Você não precisa se preocupar com banco de dados ou interface.

Pode apenas simular as opções utilizando `prompt()` e `console.log()`.

O importante é utilizar corretamente:

- `do...while`;
- `for`;
- estruturas condicionais (`if/else`).

## 📂 Código da Implementação

O código completo da implementação pode ser encontrado no arquivo:

- [`biblioteca_desafio.js`](10%20-%20Recursos/biblioteca_desafio.js)
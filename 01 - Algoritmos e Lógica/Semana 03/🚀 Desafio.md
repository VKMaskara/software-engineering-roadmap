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

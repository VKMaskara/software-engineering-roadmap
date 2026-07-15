# 🚀 Desafio da Aula 05

## Enunciado

Sem escrever código, faça o Teste de Mesa do seguinte algoritmo:

- Uma variável **saldo** começa com o valor **100**.
- O usuário faz um depósito de **50**.
- Depois realiza um saque de **30**.
- Por fim, exiba o saldo final.

```javascript
let saldo = 100;

saldo = saldo + 50;

saldo = saldo - 30;

console.log(saldo); // 120
```

| Linha | Variável | Valor |
|------:|:---------|------:|
| 1 | saldo | 100 |
| 3 | saldo | 150 |
| 5 | saldo | 120 |

---
🚀 Desafio da Aula 06
# 🚀 Desafio da Aula 06

Imagine um sistema de login.

As regras são:

- O usuário informa login e senha.
- Se os dados estiverem corretos, o sistema exibe **"Bem-vindo!"**.
- Caso contrário, exibe **"Usuário ou senha inválidos"**.
- Independentemente do resultado, o sistema registra a tentativa de login em um histórico.

Sem escrever código, descreva o fluxo de execução desse algoritmo, mostrando qual caminho é seguido em cada situação e explicando por que o registro da tentativa acontece em ambos os casos.

```text
                INÍCIO
                   │
                   ▼
           Declarar variáveis:
        login_user, senha_user,
              histórico
                   │
                   ▼
      Receber login e senha
                   │
                   ▼
      Login e senha válidos?
          │               │
         Não             Sim
          │               │
          ▼               ▼
Mostrar "Usuário     Mostrar "Login
ou senha inválidos"  realizado"
          │               │
          └───────┬───────┘
                  │
                  ▼
            histórico++
                  │
                  ▼
                 FIM
```

```javascript
let login_user = "Kauê";
let senha_user = "1234";
let historico = 0;

if (login_user == "Kauê" && senha_user == "1234") {
    console.log("Login realizado");
} else {
    console.log("Usuário ou senha inválidos");
}

historico++;

console.log("FIM");
```
---

🚀 Desafio da Aula 07

Imagine que você recebeu o seguinte algoritmo para cadastrar um aluno:

let idade = 16

if (idade >= 18){
    console.log("Cadastro permitido")
}else{
    console.log("Cadastro permitido")
}

console.log("Fim do cadastro")

Sem alterar o código inicialmente:

Identifique o problema.
Classifique o tipo de erro.
-> Erro lógico, pois ambas condições vão liberar o acesso
Explique como você utilizaria o Fluxo de Execução e o Teste de Mesa para descobrir esse erro.
-> Simples, ao usar o teste de mesa sabemos que o valor da variavel é 16 e não é subscrita durante o código, e seguindo o fluxo de execução temos uma condição onde os caminhos se dividem caso seja true ou false, desse modo como esta no código ambas as condições vão liberar o acesso, o que apresenta um erro lógico por não seguir a regra de negócio

Somente ao final, diga qual seria a correção lógica necessária.
 Apenas mudaria o console.log para "Acesso somente para maiores de 18 anos"
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
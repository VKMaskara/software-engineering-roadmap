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

# 🚀 Desafio da Aula 07

Imagine que você recebeu o seguinte algoritmo para cadastrar um aluno:

```javascript
let idade = 16

if (idade >= 18){
    console.log("Cadastro permitido")
}else{
    console.log("Cadastro permitido")
}

console.log("Fim do cadastro")
```

Sem alterar o código inicialmente:

### Identifique o problema.

### Classifique o tipo de erro.

-> Erro de lógica, pois ambas as condições vão liberar o acesso.

### Explique como você utilizaria o Fluxo de Execução e o Teste de Mesa para descobrir esse erro.

-> Simples, ao usar o Teste de Mesa sabemos que o valor da variável é 16 e não é sobrescrito durante o código. Seguindo o Fluxo de Execução, temos uma condição em que os caminhos se dividem caso seja `true` ou `false`. Desse modo, como está no código, ambas as condições vão liberar o acesso, o que apresenta um erro de lógica por não seguir a regra de negócio.

### Somente ao final, diga qual seria a correção lógica necessária.

-> Apenas mudaria o `console.log` para **"Acesso somente para maiores de 18 anos"**.

# 🚀 Desafio da Aula 08

Você foi contratado para analisar a lógica de um sistema de acesso a uma empresa.

As regras são:

- Funcionário deve estar cadastrado;
- Deve possuir crachá válido;
- Não pode estar bloqueado.

Um desenvolvedor escreveu o seguinte algoritmo:

```javascript
let cadastro = true
let cracha = true
let bloqueado = true

if (cadastro && cracha){
    console.log("Entrada liberada")
}else{
    console.log("Entrada negada")
}

console.log("Registro realizado")
```

Sem alterar o código inicialmente:

## Identifique o erro.

Independentemente de estar bloqueado ou não, o sistema libera o acesso.

## Classifique o tipo de erro.

Lógico, pois não segue a regra de negócio.

## Explique como encontraria esse erro utilizando:

### Teste de Mesa

Ao declarar as variáveis, todas recebem `true` e não são sobrescritas durante o código.

### Fluxo de Execução

```text
Início
  |
  v
Declara as variáveis
  |
  v
Possui cadastro && crachá?
      |               |
     Sim             Não
      |               |
      v               v
Entrada liberada   Entrada negada
        \           /
         \         /
          v       v
   Exibir: Registro realizado
            |
            v
           Fim
```

### Depuração Manual

Ao fazer isso, identificamos um erro de lógica, pois a variável `bloqueado` é declarada, mas não é utilizada na verificação.

## Somente ao final, explique qual seria a lógica correta.

```javascript
let cadastro = true
let cracha = true
let bloqueado = true

if (cadastro && cracha && !bloqueado){
    console.log("Entrada liberada")
}else{
    console.log("Entrada negada")
}

console.log("Registro realizado")
```
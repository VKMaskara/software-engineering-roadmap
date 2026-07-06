# 📝 Exercícios Aula 5

## Exercício 1

### Explique com suas palavras:

**O que é um Teste de Mesa?**

**R:**

Uma técnica de leitura de código em que executamos o algoritmo linha por linha mentalmente antes que o computador o execute. Sua função é identificar e mitigar erros ou bugs. Também é útil para conhecer o código de outras pessoas e fortalecer a lógica.

---

## Exercício 2

Faça o Teste de Mesa do algoritmo abaixo.

```javascript
let x = 5;
let y = 2;

x = x + y;
y = x * 2;

console.log(x);
console.log(y);
```

Monte uma tabela mostrando o valor das variáveis após cada linha.

| Linha | Variável | Valor |
|------:|:---------|------:|
| 1 | x | 5 |
| 2 | y | 2 |
| 3 | x | 7 |
| 4 | y | 14 |

---

## Exercício 3

Faça o Teste de Mesa.

```javascript
let idade = 15;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

### Responda:

**Qual condição foi avaliada?**

→ Se a pessoa era maior de idade.

**Qual foi o resultado?**

→ `false`

**Qual bloco foi executado?**

→ O bloco do `else`.
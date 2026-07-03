# Desafio - Aula 02

## Sistema de Cadastro de Livros

### Informações que precisam ser armazenadas

| Informação | Tipo de dado | Variável ou Constante? | Justificativa |
|------------|--------------|------------------------|---------------|
| Título | String | Variável | Cada livro possui um título diferente. |
| Autor | String | Variável | Pode variar para cada livro. |
| ISBN | String | Variável | Cada livro possui um ISBN único. |
| Ano de publicação | Integer | Variável | Depende do livro. |
| Número de páginas | Integer | Variável | Cada livro possui uma quantidade diferente. |
| Disponível para empréstimo | Boolean | Variável | O status muda quando o livro é emprestado. |
| Categoria | String | Variável | Ficção, Romance, História... |
| Quantidade de exemplares | Integer | Variável | Pode aumentar ou diminuir. |
| Prazo máximo de empréstimo | Integer | Constante | Exemplo: 14 dias para todos os livros. |
| Multa por dia de atraso | Float | Constante | Valor definido pela biblioteca. |

----
# Desafio — Aula 03

Você foi contratado para analisar a lógica de um sistema de uma locadora de veículos.

**Sem escrever código, responda:**

Quais comparações e operadores seriam necessários para decidir se um cliente pode alugar um carro?

Considere regras como:

- Idade mínima;
- Possuir CNH válida;
- Pagamento aprovado;
- Veículo disponível.

## Resposta

Uma resposta mais completa pode ser estruturada da seguinte forma (sem escrever código):

- Comparar se o cliente possui a idade mínima exigida;
- Verificar se a CNH está válida;
- Verificar se o pagamento foi aprovado;
- Verificar se o veículo está disponível.

Como **todas** essas condições precisam ser atendidas ao mesmo tempo para que o aluguel seja autorizado, o operador lógico mais adequado seria o **AND**, pois ele exige que todas as condições sejam verdadeiras.

--- 
# Desafio - Aula 04

Uma escola deseja automatizar o processo de divulgação das notas.

Sem escrever código, descreva a lógica que o sistema deve seguir para informar se um aluno está:

- Aprovado;
- Em recuperação;
- Reprovado.

Considere que:

- Nota maior ou igual a 7 → Aprovado.
- Nota entre 5 e 6,9 → Recuperação.
- Nota menor que 5 → Reprovado.

Nota do aluno

Se nota >= 7 → Aprovado

Se nota >= 5 → Recuperação

Se nota < 5 → Reprovado

```javascript
let nota = 9;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

----------
# 🚀 Desafio Final

## Sistema de Academia

Você terá que utilizar:

- Algoritmo;
- Variáveis;
- Operadores;
- Decisões.

Tudo junto.

É aqui que você percebe se realmente aprendeu.

---

## Algoritmo

### Fazer cadastro

Cadastrar:

- Nome;
- Idade;
- Sexo;
- Problema respiratório.

Se **idade >= 12**, pode continuar o cadastro; caso contrário, acesso restrito.

Se possuir **problema respiratório**, acesso restrito.

---

Após isso:

### Realizar o pagamento

Se o pagamento estiver em dia **e** o cadastro tiver sido realizado, acesso liberado.

Caso contrário, acesso restrito.

---

```javascript
let nome = "Kauê";
let idade = 18;
let problemaRespiratorio = false;
let pagamento = true;

let cadastro = true;

if (idade >= 12 && !problemaRespiratorio) {
    console.log("Cadastro permitido");
    cadastro = true;
} else {
    console.log("Cadastro restrito para menores de 12 anos ou pessoas com problemas respiratórios.");
    cadastro = false;
}

if (cadastro) {
    if (pagamento) {
        console.log("Acesso liberado");
    } else {
        console.log("Acesso restrito, realizar pagamento.");
    }
} else {
    console.log("Acesso restrito, realizar cadastro.");
}
```


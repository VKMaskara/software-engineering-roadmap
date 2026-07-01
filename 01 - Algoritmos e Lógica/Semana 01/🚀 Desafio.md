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


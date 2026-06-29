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
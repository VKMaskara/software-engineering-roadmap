const prompt = require('prompt-sync')()

let livros = [
  "Dom Quixote",
  "Dom Casmurro",
  "O Pequeno Príncipe",
  "1984",
  "O Senhor dos Anéis",
  "Cem Anos de Solidão",
  "A Revolução dos Bichos",
  "O Hobbit",
  "Crime e Castigo",
  "Orgulho e Preconceito",
  "Capitães da Areia",
  "Vidas Secas",
  "O Morro dos Ventos Uivantes",
  "Grande Sertão: Veredas",
  "Memórias Póstumas de Brás Cubas",
  "O Cortiço",
  "A Metamorfose",
  "O Estrangeiro",
  "O Diário de Anne Frank",
  "Fahrenheit 451",
  "Admirável Mundo Novo",
  "A Moreninha",
  "Iracema",
  "O Guarani",
  "Quarto de Despejo",
  "A Hora da Estrela",
  "Ensaio sobre a Cegueira",
  "Torto Arado",
  "O Alquimista",
  "O Menino do Pijama Listrado"
];

do{
  console.log("MENU DE OPÇÕES");
  console.log("1 - Consultar livros");
  console.log("2 - Emprestar livro");
  console.log("3 - Devolver livro");
  console.log("4 - Sair");

  let opcao = prompt("Escolha uma opção:");

    if(opcao === '1') {
        consultarLivros();
    }else if(opcao === '2') {
        emprestarLivro();
    }else if(opcao === '3') {
        devolverLivro();
    }else if(opcao === '4') {
      break;
    }else{
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }








} while(true);

function consultarLivros() {
    console.log("Livros disponíveis:");
    for (let i = 0; i < livros.length; i++) {
        console.log(`${i + 1} - ${livros[i]}`);
    }
}

function emprestarLivro() {
    console.log("Emprestar livro:");
    
    consultarLivros();

    let resposta = prompt("Digite o número do livro que deseja emprestar:");

    if (resposta >= 1 && resposta <= livros.length) {
        let livroEmprestado = livros[resposta - 1]
        console.log(`Você emprestou: ${livroEmprestado}`);
    } else {
        console.log("Número de livro inválido.");
    }

}

function devolverLivro() {
    console.log("Devolver livro:");

    consultarLivros();

    let resposta = prompt("Digite o número do livro que deseja devolver:");

    if (resposta >= 1 && resposta <= livros.length) {
        let livroDevolvido = livros[resposta - 1]
        console.log(`Você devolveu: ${livroDevolvido}`);
    } else {
        console.log("Número de livro inválido.");
    }
}
# Aula 14 - Escopo

## 🎯 Tema

Escopo de Variáveis

---

## 📖 Objetivos da Aula

Ao final da aula serei capaz de:

- Entender o que é escopo;
- Diferenciar variáveis globais e locais;
- Saber onde uma variável pode ser utilizada;
- Identificar erros relacionados ao escopo;
- Organizar melhor minhas funções.

---

## O que é Escopo?

-> Escopo é a região do código onde uma variável existe e pode ser acessada.

Em outras palavras:

O escopo determina onde uma variável pode ser utilizada durante a execução do programa.

---

## 🧠 Analogia

Imagine uma escola.

Existe uma informação conhecida por todos:

**Nome da escola**

Todos os professores, alunos e funcionários conhecem essa informação.

Agora imagine:

**Nota da prova do aluno João**

Essa informação pertence apenas ao João e ao professor.

Nem todos podem acessá-la.

No código acontece exatamente a mesma coisa.

Algumas variáveis podem ser acessadas em qualquer lugar.

Outras existem apenas em um pequeno trecho do programa.

---

## 🌍 Escopo Global

Imagine:

```javascript
let nome = "Kauê";

function mostrarNome() {
    console.log(nome);
}

mostrarNome();
```

Repare que a variável `nome` foi declarada na raiz do código, fora de qualquer outro bloco.

Quem consegue acessar a variável `nome`?

-> Todo o programa.

Chamamos isso de **escopo global**.

---

## 📦 Escopo Local

Agora observe:

```javascript
function mostrarNome() {

    let nome = "Kauê";

    console.log(nome);

}

mostrarNome();
```

Agora a variável foi criada dentro da função.

Quem consegue utilizá-la?

Apenas essa função.

Ela deixa de existir quando a função termina.

---

## ❌ O que acontece se tentarmos acessar?

```javascript
function mostrarNome(){

    let nome = "Kauê";

}

console.log(nome);
```

Resultado:

```text
ReferenceError: nome is not defined
```

Por quê?

Porque a variável deixou de existir quando a função terminou.

Ela só existia naquele escopo.

---

## 🔄 Fluxo de Execução

```text
Início
   |
Criar variável global
   |
Criar função
   |
Executar função
   |
Criar variável local
   |
Executa o código
   |
Fim da função
   |
Variável local deixa de existir
   |
Continua o programa
```

A vida da variável local dura apenas durante a execução da função.

---

## 📊 Comparando

### Variável Global

```javascript
let sistema = "Navalhou";
```

Pode ser utilizada por qualquer função e em qualquer lugar do código.

---

### Variável Local

```javascript
function cadastrar() {
    let nome = "João";
}
```

Só existe dentro dessa função.

---

## 💡 Boas práticas

Nem tudo deve ser global. Na verdade, a melhor prática é evitar variáveis globais ao máximo.

Isso reduz o acoplamento, evita alterações inesperadas durante a execução do programa e facilita a manutenção do código.

---

## ⚠️ Erro comum

Observe:

```javascript
let contador = 0;

function aumentar() {

    contador++;

}
```

Funciona.

Mas imagine um sistema enorme.

Qualquer função pode alterar `contador`.

Isso dificulta a manutenção e aumenta as chances de erros.

---

## 📌 Resumo da Aula

Hoje aprendemos que:

- Escopo define onde uma variável pode ser utilizada;
- Variáveis globais existem durante toda a execução do programa;
- Variáveis locais existem apenas dentro da função ou bloco onde foram criadas;
- Ao terminar a função, as variáveis locais deixam de existir;
- Devemos evitar criar variáveis globais desnecessariamente.
# Aplicação de banco de dados com Python

## O que vai ser abordado?

-> Linguagem SQL (DDL, DML e DCL).

-> Conexão de Python com banco usando `sqlite3`.

-> CRUD: Create, Read, Update e Delete.

## SQL: A linguagem dos bancos relacionais

-> SQL: três categorias de comandos.

-> DDL (Data Definition Language): estrutura do banco - `CREATE`, `ALTER`, `DROP`.

-> DML (Data Manipulation Language): manipulação de dados - `SELECT`, `INSERT`, `UPDATE`, `DELETE`.

-> DCL (Data Control Language): segurança e permissões - `GRANT`, `REVOKE`.

-> SQL é padrão (ANSI 1986): a base funciona em qualquer SGBD: Oracle, MySQL, PostgreSQL, SQLite.

## Conexão com banco de dados em Python

-> Tecnologias ODBC padronizam o acesso a SGBDs.

-> O Python segue a PEP 249, que define como módulos de banco devem funcionar.

-> Para esta aula, vamos usar o módulo `sqlite3`, que já vem com o Python.

-> O SQLite é um banco completo armazenado em um único arquivo - sem servidor.

-> Ideal para aprender, prototipar e para sistemas pequenos e médios.

## CRUD: as 4 operações fundamentais

CRUD: o coração de qualquer banco.

-> Create - `INSERT INTO ...` (criar registros).

-> Read - `SELECT ... FROM ...` (ler registros).

-> Update - `UPDATE ... SET ...` (atualizar registros).

-> Delete - `DELETE FROM ... WHERE ...` (excluir registros).

Qualquer aplicação com banco de dados, no fundo, faz combinações dessas quatro operações.

## Quatro passos

O ritual: quatro passos sempre iguais.

-> Conectar ao banco: com `sqlite3.connect('arquivo.db')`.

-> Criar o cursor e executar o comando:
`cursor.execute(comando_sql)`.

-> Confirmar a operação: `conn.commit()`.

-> Fechar a conexão: `conn.close()`.

## Exemplo

```python
import sqlite3

# 1. Abrir conexão
conn = sqlite3.connect('minhaloja.db')
cursor = conn.cursor()

# 2. Apagar tabela antiga e criar a nova com a sintaxe e nomes corretos
cursor.execute("DROP TABLE IF EXISTS Produtos")

create_table = """
CREATE TABLE Produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_produto TEXT NOT NULL,
    preco REAL NOT NULL,
    estoque INTEGER
)
"""

cursor.execute(create_table)
conn.commit()

# 3. Inserir o produto
novo_produto = ('Camiseta', 19.99, 50)
inserir_produto = """
INSERT INTO Produtos (nome_produto, preco, estoque)
VALUES (?, ?, ?)
"""

cursor.execute(inserir_produto, novo_produto)
conn.commit()

# 4. Fechar a conexão APENAS ao final de todas as operações
cursor.close()
conn.close()

print("Produto inserido com sucesso!")

# READ
conn = sqlite3.connect('minhaloja.db')
cursor = conn.cursor()

cursor.execute("SELECT * FROM Produtos")
produtos = cursor.fetchall()

for produto in produtos:
    print(produto)

cursor.close()
conn.close()

# UPDATE
import sqlite3

conn = sqlite3.connect('minhaloja.db')
cursor = conn.cursor()

novo_preco = 24.99
produto_id = 1

cursor.execute(
    "UPDATE Produtos SET preco = ? WHERE id = ?",
    (novo_preco, produto_id)
)

conn.commit()
cursor.close()
conn.close()

print("Produto atualizado")

# DELETE - excluindo o produto com id = 1
import sqlite3

conn = sqlite3.connect('minhaloja.db')
cursor = conn.cursor()

produto_id = 1

cursor.execute("DELETE FROM Produtos WHERE id = ?", (produto_id,))
conn.commit()

cursor.close()
conn.close()

print("Produto excluído.")
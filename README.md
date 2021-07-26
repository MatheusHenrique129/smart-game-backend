# smart_game_backend

## Back-end do projeto para a loja de jogos, da empresa Smart Games

### Linguagens e ferramentas utilizadas

- Linguagens e ferramentas utilizadas: NodeJS
- Framework: Express
- ORM: Sequelize
- Banco de dados: MySql
- Express: Framework de construção da API
- Sequelize: ORM para o banco
- MySQL Workbench 8.0: IDE do MySQL ultilizada para criação do banco de dados

### Pré-requisitos necessários para rodar o projeto

```
- Instalar dependências do projeto -> $ npm install

- Importar o Banco no MYSQL

- No arquivo ormconfig.json, altere os dados para o seu banco de dados local

- Type: (Caso o seu banco de dados não seja o Mysql, colocar o banco de dados que estiver utilizando)

- Criar o banco de dados, executando o comando no terminal -> "npx sequelize db:create"

- Sincronizar o back com o banco criado as tabelas e relacionamentos $ "npx sequelize db:migrate"

- Popular as tabelas do banco com os dados fornecidos pela arquivo sql -> "npx sequelize db:seed:all"
```

Após a instalação das depêndencias e a criação do banco de dados, basta iniciar a aplicação atraves da porta "8000" -> $ npm start

#### Rotas GET

- http://localhost:8000/games -> Listagem de Jogos
- http://localhost:8000/platforms -> Listagem de Plataformas
- http://localhost:8000/stores -> Listagem de Lojas

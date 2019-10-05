# GoBarber: Um projeto do bootcamp [RocketSeat](https://rocketseat.com.br/)

### Visão geral do projeto:
Este é um projeto desenvolvido durante as aulas do [Bootcamp RocketSeat](https://rocketseat.com.br/bootcamp).
O projeto consiste em uma aplicação de cadastro de diversos usuários, onde alguns deles são prestadores de serviços.
Os usuários podem se cadastrar, efetuar upload de avatar, consultar/agendar horários, etc.

### Algumas tecnologias utilizadas:
 - [Express](https://expressjs.com/pt-br/): Miniframework Node para construção das rotas e middlewares do projeto;
 - [Multer](https://github.com/expressjs/multer): Para upload de arquivos;
 - [Sequelize](https://sequelize.org/): ORM para BD relacional usado na aplicação;
 - [Mongoose](https://mongoosejs.com/): ORM Mongodb;
 - [bee-queue](https://github.com/bee-queue/bee-queue): Job/task queue para NodeJS usando BD [Redis](https://redis.io/);
 
 ### Rodando a aplicação:
1. Certifique-se de usar um banco de dados compatível com o Sequelize ([Sequelize dialects](https://sequelize.org/master/manual/dialects.html)); 
 
 
2. Inicie os respectivos bancos de dados (*Containers Docker são altamente recomendados aqui*):
  - Relacional compatível com o Sequelize: Persistência dos dados da aplicação;
  - MongoDB: Para persistência das notificações;
  - Redis: Para armazenar a queue do serviço de envio de emails da aplicação.
 
 
3. Efetue o clone do projeto:
   ```
   git clone https:\\github.com/tonkunz/gobarber
   ```
 
 
4. Dentro da raíz do projeto, crie o arquivo `.env` e insira as informações para as variáveis ambiente, conforme o arquivo legenda `.env.example` neste repositório.
 
 **PS:** Recomenda-se não alterar a `APP_URL=http://localhost:3333`, mas caso deseje alterar a porta, certifique-se também de alteralá em `src/server.js`
 
 
5. Instale as dependências:
   ```
   npm install
   ```
   Para usuários do yarn:
   ```
   yarn install
   ```
   
 
6. Execute as migrations: https://sequelize.org/master/manual/migrations.html
   ```
   npx sequelize db:migrate
   ```
   Para usuários do yarn:
   ```
   yarn sequelize db:migrate
   ```
 
 
7. Inicie a aplicação:
   ```
   node src/server.js
   ```
   Ou inicie com [Nodemon](https://nodemon.io/) através do script:
   ```
   npm run dev
   ```
   Para usuários do yarn:
   ```
   yarn dev
   ```
 
8. Confira as rotas da API em `src/routes.js` para consumi-las.

### Agradecimentos:
- Ao conteúdo, lições, mentoria e comunidade da RocketSeat.

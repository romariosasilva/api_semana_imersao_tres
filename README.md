SEQUÊNCIA PARA CRIAR O PROJETO

Criar o arquivo package.json
### npm init

Instalar o expres
Express é uma biblioteca que gerencia as requisições, rotas, URLs entre outras funcionalidades.
### npm install express

Instalar o Nodemon
Nodemon é um módulo para reiniciar o servidor automaticamente sempre que houver alteração no código fonte.
-g significa globalmente
### npm install -g nodemon

Instalar o banco de dados MongoDB
### npm install --save mongodb

Instalar o Mongoose
Mongoose traduz os dados do banco de dados para objetos JS para que possam ser utilizados pelo app.
### npm install --save mongoose

Instalar o cors
cors permite o acesso à API
### npm install --save cors

Gerar o backup do banco de dados MongoDB
### mongodump --db celke --out C:\data\db

Restaurar o backup do banco de dados MongoDB
### mongorestore --db celke C:\data\db\celke

# Portfólio Fullstack - Enzo Gabriel de Paula

## 📖 Descrição

Este portfólio é uma aplicação **Fullstack** desenvolvida como projeto acadêmico. Ele marca a evolução de um site estático para uma aplicação dinâmica e robusta.

O projeto foi construído utilizando **Node.js** e **Express**, seguindo rigorosamente a arquitetura **MVC (Model-View-Controller)** para organização do código. A persistência de dados é gerenciada pelo **MySQL** através do ORM **Sequelize**, permitindo operações de CRUD (Create, Read, Update, Delete) completas. O Frontend utiliza a engine de visualização **EJS** para renderizar páginas dinâmicas com base nos dados do servidor.

## 🚀 Tecnologias Utilizadas

### Backend & Banco de Dados
* **Node.js:** Ambiente de execução JavaScript.
* **Express:** Framework web para gerenciamento de rotas e servidor.
* **MySQL:** Banco de dados relacional.
* **Sequelize:** ORM (Object-Relational Mapper) para manipulação do banco via JavaScript.
* **Body-Parser:** Middleware para tratamento de requisições JSON e URL-encoded.

### Frontend
* **EJS (Embedded JavaScript):** Motor de templates para renderização dinâmica.
* **HTML5 & CSS3:** Estrutura e estilização.
* **Bootstrap Icons:** Ícones vetoriais.

### Arquitetura
* **MVC:** Separação de responsabilidades em Models, Views e Controllers.

## ✨ Funcionalidades

* **CRUD de Disciplinas:** Adicionar, editar, listar e excluir disciplinas acadêmicas diretamente no banco de dados.
* **CRUD de Projetos:** Sistema administrativo para gerenciar o portfólio de projetos.
* **Dashboard Dinâmico:** Exibição de estatísticas em tempo real (total de disciplinas, projetos, contagem de tecnologias), calculadas diretamente do banco.
* **Seeding Automático:** O sistema verifica se o banco está vazio ao iniciar e insere automaticamente dados iniciais (projetos e disciplinas padrão) para facilitar o teste.
* **Páginas Públicas:** Home, Sobre Mim e Contato totalmente integradas ao backend.

## 📂 Estrutura do Projeto (MVC)

O código está organizado da seguinte forma:

* src/database: Configuração de conexão com o MySQL.
* src/models: Definição das tabelas (Disciplinas, Projetos).
* src/controllers: Lógica de negócios e comunicação com o banco.
* src/routes: Definição das rotas da aplicação.
* views: Arquivos EJS (Frontend) e parciais (Navbar, Footer).
* public: Arquivos estáticos (CSS, Imagens).

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter instalado:
* Node.js
* MySQL Server

### 2. Instalação

    # 1. Clone o repositório
    git clone [https://github.com/EnzoGabrielCode/portfolio.git](https://github.com/EnzoGabrielCode/portfolio.git)

    # 2. Acesse a pasta do projeto
    cd portfolio

    # 3. Instale as dependências listadas no package.json
    npm install

### 3. Configuração do Banco de Dados

1.  Abra o seu MySQL (Workbench ou Terminal) e crie o banco de dados:

        CREATE DATABASE portfolio_db;

2.  No código do projeto, abra o arquivo src/database/db.js.
3.  Edite a linha de conexão com a sua senha do MySQL:

        const sequelize = new Sequelize('portfolio_db', 'root', 'SUA_SENHA_AQUI', { ... });

### 4. Execução

    # Inicie o servidor
    npm start

O servidor rodará em http://localhost:3000. 
Nota: Na primeira execução, o sistema irá criar as tabelas e inserir os dados iniciais automaticamente.

---
Desenvolvido por Enzo Gabriel 🚀

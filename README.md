## Organizador de Tarefas

Este é um projeto de aplicação para organização de tarefas, desenvolvido como parte de um processo seletivo.

## Tecnologias Utilizadas

  * **Frontend**: ReactJS com Vite
  * **Backend**: NestJS com TypeScript
  * **Banco de Dados**: PostgreSQL

-----

## Pré-requisitos

Para rodar este projeto, você precisará ter instalado:

  * **Node.js**: Versão LTS recomendada.
  * **npm** ou **yarn**.
  * **PostgreSQL**: Deve estar rodando localmente.

-----

## Configuração

Siga os passos abaixo para configurar o projeto:

### 1\. Clonar o Repositório

```bash
# Comando para clonar o repositório (substitua com o link real do seu repositório)
git clone [URL_DO_REPOSITORIO]
cd [NOME_DA_PASTA_DO_PROJETO]
```

### 2\. Configurar o Banco de Dados

1.  Crie um novo banco de dados PostgreSQL.

2.  Na pasta `backend` do projeto, crie um arquivo `.env` com as seguintes variáveis de ambiente:

    ```plaintext
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_NAME=bancodedados
    DATABASE_USER=usuario
    DATABASE_PASSWORD=senha
    ```

    **Ajuste os valores** conforme sua configuração local do PostgreSQL.

3. Na pasta `frontend` do projeto, crie um arquivo `.env` com as seguintes variáveis de ambiente:
    ```plaintext
    VITE_API_ENDPOINT=http://localhost:3000/
    ```
    **Ajuste se necessário** dependendo de qual forma executar o backend NestJs.

### 3\. Instalar as Dependências

Navegue até as pastas `frontend` e `backend` separadamente para instalar as dependências:

```bash
# Para o Frontend
cd frontend
npm install
cd ..

# Para o Backend
cd backend
npm install
cd ..
```

-----

## Executando o Projeto

### Modo Desenvolvedor

Para desenvolver e testar a aplicação localmente:

#### Frontend

```bash
cd frontend
npm run dev
```

O frontend geralmente estará acessível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

#### Backend

```bash
cd backend
npm run start:dev
```

O backend geralmente estará acessível em `http://localhost:3000` (ou outra porta indicada pelo NestJS).

### Modo Produção

Para construir e rodar a aplicação para produção:

#### Frontend

```bash
cd frontend
npm run build
npm run preview
```

#### Backend

```bash
cd backend
npm run build
npm run start:prod
```

-----

## Observações

  * Certifique-se de que o servidor PostgreSQL está rodando antes de iniciar o backend.
  * As variáveis de ambiente no arquivo `.env` do backend devem ser configuradas corretamente para que a conexão com o banco de dados seja estabelecida.

-----

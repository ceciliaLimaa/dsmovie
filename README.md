# 🎬 DSMovie 

Aplicação web para listagem e avaliação de filmes, desenvolvida durante a **Semana Spring React** da [DevSuperior](https://devsuperior.com.br). O frontend consome a API REST do backend DSMovie e permite visualizar filmes, conferir as notas e deixar sua própria avaliação.

---

## 📸 Visão Geral

- Listagem paginada de filmes com poster, título e nota
- Sistema de estrelas dinâmico (cheia, meia e vazia)
- Formulário de avaliação com validação de e-mail
- Navegação entre páginas com React Router

---

## 🛠️ Tecnologias

- [React 17](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- CSS customizado com variáveis
- Deploy via [Netlify](https://www.netlify.com/)

---

## 📁 Estrutura de Componentes

```
src/
├── assets/
│   └── img/               # Ícones SVG (estrelas, GitHub, seta)
├── components/
│   ├── Navbar/            # Barra de navegação com link do GitHub
│   ├── MovieCard/         # Card do filme com poster e botão de avaliação
│   ├── MovieScore/        # Nota numérica + estrelas + contagem
│   └── MovieStars/        # Renderização das estrelas (full/half/empty)
├── pages/
│   ├── Listing/           # Página principal com listagem de filmes
│   └── Form/              # Página de avaliação do filme
├── types/
│   └── movie.ts           # Tipagem da entidade Movie
└── utils/
    ├── requests.ts        # BASE_URL da API
    └── validate.ts        # Validação de e-mail
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Yarn](https://yarnpkg.com/) **ou** npm
- O **backend DSMovie** em execução (veja o repositório do backend)

---

## 🚀 Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/ceciliaLimaa/dsmovie-frontend.git
cd dsmovie-frontend
```

### 2. Instale as dependências

```bash
yarn
```

> Ou, se preferir npm:
> ```bash
> npm install
> ```

### 3. Configure a URL da API

No arquivo `src/utils/requests.ts`, verifique se a `BASE_URL` aponta para o backend local:

```ts
export const BASE_URL = 'http://localhost:8080';
```

> Se o backend estiver em produção, substitua pela URL do servidor.

### 4. Execute o projeto

```bash
yarn start
```

> Ou com npm:
> ```bash
> npm start
> ```

A aplicação abrirá automaticamente em [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Build para produção

```bash
yarn build
```

Os arquivos otimizados serão gerados na pasta `/build`, prontos para deploy.

---

## 🔗 Backend

Este frontend depende do backend DSMovie (Spring Boot + PostgreSQL).  
➡️ [Repositório do Backend](https://github.com/ceciliaLimaa/dsmovie-backend)

---

## 👩‍💻 Autora

Feito por **Ana Cecília**  
[![GitHub](https://img.shields.io/badge/GitHub-ceciliaLimaa-0F172A?style=flat-square&logo=github&logoColor=white)](https://github.com/ceciliaLimaa)

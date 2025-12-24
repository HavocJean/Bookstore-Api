# Bookstore-Api 📚

**Descrição**

API para gerenciamento de uma livraria (autores, livros, clientes e vendas) construída em Node.js/Express com MongoDB.

---

## 🧰 Tecnologias

- Node.js (recomenda-se >= 14/16)
- Express
- MongoDB
- Mongoose
- npm / Yarn

---

## ✅ Pré-requisitos

- Git
- Node.js e npm (ou Yarn)
- MongoDB em execução (local ou serviço remoto)

---

## 🚀 Instalação

1. Clone o repositório:

   ```bash
   git clone <repo-url>
   cd Bookstore-Api
   ```

2. Instale dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure variáveis de ambiente (ex.: `MONGO_URI`, `PORT`) — copie `env.example` para `.env` se disponível.

4. Inicie a API:

   ```bash
   npm start
   # ou para desenvolvimento com auto-reload
   npm run dev
   ```

A API ficará disponível em `http://localhost:3000` (ou na porta definida em `PORT`).

---

## ▶️ Rotas

Autores (`/api/authors`):
- `GET /api/authors` 
- `GET /api/authors/:id` 
- `POST /api/authors`
- `PUT /api/authors/:id` 
- `DELETE /api/authors/:id`

Livros (`/api/books`):
- `GET /api/books`
- `GET /api/books/:id`
- `POST /api/books`
- `PUT /api/books/:id`
- `DELETE /api/books/:id`

Clientes (`/api/clients`):
- `GET /api/clients`
- `GET /api/clients/:id`
- `POST /api/clients`
- `PUT /api/clients/:id`
- `DELETE /api/clients/:id`

Vendas (`/api/sales`):
- `GET /api/sales`
- `GET /api/sales/:id`
- `POST /api/sales`
- `PUT /api/sales/:id`
- `DELETE /api/sales/:id`

> Observação: confirme os nomes das rotas em `routes/` caso haja variação.

---

## 🔎 Exemplo de requisição (cURL)

Criar um livro:

```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "Exemplo", "authorId": "<authorId>", "price": 29.9}'
```

---

## 📝 Observações

- Verifique a configuração do banco em `repositories/mongo.db.js` ou `repositories/db.js`.

---
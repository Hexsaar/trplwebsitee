Backend Express + SQLite for CRUD and admin auth

Setup

1. From repository root, install dependencies:

```bash
cd server
npm install
```

2. Copy env example and edit if needed:

```bash
cp .env.example .env
```

3. Run server:

```bash
npm run dev
```

API endpoints
- `POST /auth/login` { username, password } => { token }
- `GET /lecturers` public
- `POST /lecturers` protected (Authorization: Bearer <token>)
Same pattern for `/staff`, `/workshops`, `/news`.

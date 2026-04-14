# My Shop

Online shop project with a Next.js frontend and a Strapi backend.

## Stack

- Frontend: Next.js 16, React 19, TypeScript
- Backend: Strapi 5, SQLite
- Data fetching: `fetch` and `axios`

## Project Structure

```text
my-shop/
|-- frontend/   # storefront app
|-- backend/    # Strapi CMS and API
```

## Getting Started

### 1. Install dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

### 2. Configure backend environment

Copy the example environment file:

```bash
cd backend
cp .env.example .env
```

If you are using PowerShell:

```powershell
Copy-Item .env.example .env
```

### 3. Start the backend

```bash
cd backend
npm run develop
```

Strapi runs on `http://localhost:1337`.

### 4. Start the frontend

In a separate terminal:

```bash
cd frontend
npm run dev
```

The storefront runs on `http://localhost:3000`.

## How It Works

- The frontend requests products and categories from the Strapi API
- The current frontend API base URL is `http://localhost:1337`
- Products, categories, and orders are managed in `backend`

## Useful Commands

### Frontend

```bash
npm run dev
npm run build
npm run start
```

### Backend

```bash
npm run develop
npm run build
npm run start
```

## Notes

- `frontend` and `backend` already contain their own local `README.md` files
- This root `README.md` documents the full project from the repository root
- `backend/.env.example` is included for quick setup
- The root `.gitignore` covers Next.js, Strapi, build output, `node_modules`, uploads, and local environment files

This is a PoC for a healthcare appointment management dashboard (really any industry with an appointment oriented admin) 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

This is a PoC for presentational purposes, many best-practices aren't adhered to. For example, admin passkey is accessed via a public env variable, there's no true auth/login (for presentational accessibility & ease), no route guards, etc. 

### Stack
  - NextJS
  - ShadCN
  - Tailwind
  - Appwrite
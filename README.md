# Werkspot Clone

This is a Next.js application designed to be deployed on Railway.

## Deployment to Railway

### Prerequisites
1. Create a Railway account at [railway.app](https://railway.app)
2. Install the Railway CLI: `npm i -g @railway/cli`

### Steps to Deploy

1. Login to Railway via CLI:
   ```
   railway login
   ```

2. Link your project:
   ```
   railway link
   ```

3. Set up environment variables (if needed):
   ```
   railway variables set KEY=VALUE
   ```

4. Deploy your application:
   ```
   railway up
   ```

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Copy `.env.example` to `.env.local` and adjust the values as needed for local development.

```
cp .env.example .env.local
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Manual installation in Visual Studio Code

## 1. Open the project
Open the extracted project folder in Visual Studio Code.

## 2. Create the environment file
Create `.env` from `.env.example`.

Required values:

```env
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"
```

## 3. Install dependencies

```bash
npm install
```

## 4. Prepare Prisma

```bash
npx prisma generate
npx prisma db push
```

## 5. Run the development server

```bash
npm run dev
```

## 6. Build for production

```bash
npm run build
npm run start
```

## 7. If the Prisma database needs resetting
Delete `prisma/dev.db` and run:

```bash
npx prisma db push
```

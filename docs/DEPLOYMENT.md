# Deployment notes

## Local manual workflow
This package is intentionally prepared for manual setup in Visual Studio Code without any Windows batch installer.

## GitHub
Primary source repository target:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Hosting options
After pushing to GitHub, you can import the repository into a platform such as Vercel or Render.

## Database note
This project uses SQLite by default for the simplest possible setup:

```env
DATABASE_URL="file:./prisma/dev.db"
```

For long-term public hosting and persistent multi-user data, consider switching later to a managed network database.

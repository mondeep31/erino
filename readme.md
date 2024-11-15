# Form Management

Hey There! I did it as a practice project in TypeScript with React.js and Node.js + Express.js. For Database, I used PostgreSQL along with Prisma ORM. Below is a working video of the project. Feel free to go through the code.

https://github.com/user-attachments/assets/3076b096-2b2c-4e47-bbbc-12ce51e6ba53

### How to run this project

```
git pull https://github.com/mondeep31/erino.git

cd frontend
npm install
npm run dev

cd ..

cd backend
npm install
npm run dev
```

Remember to add create an .env file in the backend directory and add your DATABASE_URL.

It should be a PostgreSQL URL.

Here, Prisma is also integrated, so you can npx prisma generate to sync the database with the existing schema.

However, If you decide to have a fresh setup, you can run

```
npx prisma migrate reset
```

and if you make any changes, you need to run

```
npx prisma migrate dev
```

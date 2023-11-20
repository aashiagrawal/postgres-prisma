This take-home assignment has been completed following the instructions provided [here](https://quillsql.notion.site/quillsql/Quill-Project-031462e064f546cb933f77775d280307)

## How I started

I began this project by using the following boiletplate in order to more easily get started with NextJS, Tailwind CSS, and Prisma: https://github.com/vercel/examples/tree/main/storage/postgres-prisma

## Learning outcomes

For this project, I used TypeScript, ReactJS, Tailwind CSS, NextJS, PostgreSQL, and Prisma. Every part of the stack, besides ReactJS, was a framework or tool that I had never used before. So, I constantly found myself watching tutorials, reading articles, and finding good documentation for how to go about using these framworks. I learned a lot about how ORMs like Prisma can be used to simplify the process of working with data from relational databases. I also learned more about how to use NextJS to create API enpoints to access the PostgreSQL database.


## Run the project locally

In order to test this project locally, first clone the repository and place the following environment variable in a .env file located at the root of the project directory:

```
DATABASE_URL="postgresql://postgres:QvmH8GIP80sYAmsC@db.dqyttgycvrhmjlgtjviq.supabase.co:5432/postgres"
```

To start the application:
```bash
pnpm dev
```

## View live deployment on Vercel

View a deployed version of the application here: https://postgres-prisma-beige.vercel.app/

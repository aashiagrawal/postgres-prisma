// import prisma from '../lib/prisma'

// async function main() {
//   const response = await Promise.all([
//     prisma.users.upsert({
//       where: { email: 'rauchg@vercel.com' },
//       update: {},
//       create: {
//         name: 'Guillermo Rauch',
//         email: 'rauchg@vercel.com',
//         image:
//           'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
//       },
//     }),
//     prisma.users.upsert({
//       where: { email: 'lee@vercel.com' },
//       update: {},
//       create: {
//         name: 'Lee Robinson',
//         email: 'lee@vercel.com',
//         image:
//           'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
//       },
//     }),
//     await prisma.users.upsert({
//       where: { email: 'stey@vercel.com' },
//       update: {},
//       create: {
//         name: 'Steven Tey',
//         email: 'stey@vercel.com',
//         image:
//           'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
//       },
//     }),
//   ])
//   console.log(response)
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
console.log("in seed");
console.log(prisma);
async function main() {
  // Creating a Dashboard
  const newDashboard = await prisma.dashboard.create({
    data: {
      name: 'Main Dashboard',
      // other fields...
    },
  })

  // Creating a Chart linked to the Dashboard
  await prisma.chart.create({
    data: {
      name: 'Sample Chart',
      dashboardId: newDashboard.id,
      sqlQuery: 'SELECT * FROM ...',
      xAxisField: 'xField',
      yAxisField: 'yField',
      // other fields...
    },
  })

  // Add more data as needed...
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

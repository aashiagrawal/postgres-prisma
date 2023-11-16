// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
// console.log("in seed");
// console.log(prisma);
// async function main() {
//   // Creating a Dashboard
//   const newDashboard = await prisma.dashboard.create({
//     data: {
//       name: 'Main Dashboard',
//       // other fields...
//     },
//   })

//   // Creating a Chart linked to the Dashboard
//   await prisma.chart.create({
//     data: {
//       name: 'Sample Chart',
//       dashboardId: newDashboard.id,
//       sqlQuery: 'SELECT * FROM ...',
//       xAxisField: 'xField',
//       yAxisField: 'yField',
//       // other fields...
//     },
//   })

//   // Add more data as needed...
// }

// main()
//   .catch(e => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
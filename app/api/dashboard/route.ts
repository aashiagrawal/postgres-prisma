// pages/api/charts/[dashboardName].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   const dashboardName = req.query.dashboardName as string;
// //   const dashboardName = "test";
//   return new Response("hello");
//   try {
//     const dashboard = await prisma.dashboard.findUnique({
//       where: {
//         name: dashboardName,
//       },
//       include: {
//         Chart: true, // Ensure this matches the field name in the schema
//       },
//     });

//     if (dashboard) {
//       res.status(200).json(dashboard.Chart); // Use 'Chart' as defined in your schema
//     } else {
//       res.status(404).json({ message: 'Dashboard not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching charts:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

export async function GET(request) {
    const dashboardName = "Dash 1";
    console.log(dashboardName);
    try {
        const dashboard = await prisma.dashboard.findUnique({
            where: {
                name: dashboardName,
            },
            include: {
                Chart:true,
            },
        });
        if (dashboard) {
            return NextResponse.json(dashboard.Chart)
            // res.status(200).json(dashboard.Chart)
        } else {
            return new Response("chart not found");
            // res.status(404).json({ message: 'Dashboard not found' });
        }
    } catch (error){
        console.log("error fetching chart");
    }
    // return new Response("hello");
}
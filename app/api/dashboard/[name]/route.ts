import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function GET(request, {params}) {
    const dashboardName = decodeURI(params.name);
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
}
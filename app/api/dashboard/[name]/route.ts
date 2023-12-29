import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();
//function to retrieve all charts associated with a given dashboard name
export async function GET(request: NextRequest, { params }: { params: { name: string } }) { 
    const dashboardName = decodeURI(params.name);
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
            // console.log(NextResponse.json(dashboard.Chart))
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
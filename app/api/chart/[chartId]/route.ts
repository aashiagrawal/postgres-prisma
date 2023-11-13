import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function GET(request, {params}) {
    const chartId = params.chartId;
    console.log(chartId);
    try {
        const chart = await prisma.chart.findFirst({
            where: {
                id: Number(chartId),
            },
        });
        if (chart) {
            console.log(chart);
            return NextResponse.json(chart)
        } else {
            return new Response("no charts found");
        }
    } catch (error){
        console.log("error fetching charts");
    }
}
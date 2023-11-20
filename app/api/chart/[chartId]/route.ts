import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

//function to retrieve chart information given a chartid
export async function GET(request: NextRequest, { params }: { params: { chartId: number } }) {
    const chartId = params.chartId;
    try {
        const chart = await prisma.chart.findFirst({
            where: {
                id: Number(chartId),
            },
        });
        if (chart) {
            return NextResponse.json(chart);
        } else {
            return new Response("No charts found");
        }
    } catch (error) {
        console.error("Error fetching charts:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

function convertBigIntToString(data: {}) {
    return JSON.parse(JSON.stringify(data, (_, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
}

export async function GET(request: NextRequest, { params }: { params: { sqlQuery: string } }) {
    const sqlQuery = params.sqlQuery;
    try {
        const query_data = await prisma.$queryRawUnsafe(sqlQuery);

        if (query_data) {
            console.log("this is query data: ", query_data);
            const convertedData = convertBigIntToString(query_data);
            return NextResponse.json(convertedData);
        } else {
            return new Response("No charts found", { status: 404 });
        }
    } catch (error: any){
        console.error("Error fetching query data:", error.message);
        return new Response("Internal Server Error", { status: 500 });
    }
}

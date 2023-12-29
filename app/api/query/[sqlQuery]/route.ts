import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

//converts big int type to a string. Need this function because response from query_data has bigints
function convertBigIntToString(data: {}) {
    return JSON.parse(JSON.stringify(data, (_, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
}

//function to query the postgres database with a given SQL query to retrieve data that will be displayed in the charts
export async function GET(request: NextRequest, { params }: { params: { sqlQuery: string } }) {
    const sqlQuery = params.sqlQuery;
    try {
        const query_data = await prisma.$queryRawUnsafe(sqlQuery);

        if (query_data) {
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

// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();
//         console.log(body);
//     } catch (error: any){
//         console.error("Error retrieving body:", error.message);
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }

'use client'
import React, { useState, useEffect } from 'react';
import Chart from '@/components/chart';
function Page({ params }: { params: { name: string } }) {
    const [charts, setCharts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharts = async () => {
            const dashboardName = decodeURIComponent(params.name);
            console.log(`Fetching charts for dashboard: ${dashboardName}`);
            try {
                // Adjust the fetch call to match your API endpoint
                const response = await fetch(`/api/dashboard/${dashboardName}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setCharts(data);
            } catch (error) {
                console.error('Error fetching charts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharts();
    }, [params.name]);

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center">
            <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                {decodeURI(params.name)}
            </h1>
            <div className="mx-10">
                <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg w-full "> 
                <div >
                    {isLoading ? (
                        <p>Loading charts...</p>
                    ) : (
                        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {charts.map((chart: any) => (
                            <li key={chart.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                            <div className="flex w-full items-center justify-between space-x-6 p-6">
                                <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="truncate text-sm font-medium text-gray-900 font-sans">{chart.name}</h3>
                                    <div>
                                        <Chart chartId={chart.id} containerStyle={{ backgroundColor: 'lightgray', padding: '10px' }}></Chart>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
            </div>
        </main>

    );
}

export default Page;

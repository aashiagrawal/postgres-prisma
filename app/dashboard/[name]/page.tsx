'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Chart from '@/components/chart';
import Link from 'next/link'
import Dashboard from '@/components/dashboard';


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

    const handleChartClick = (chartId: number) => {
        console.log("Chart clicked:", chartId);
    };

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
                <Dashboard charts={charts} containerStyle={{backgroundColor: 'lightgray', padding: '10px'}} onClickDashboardItem={handleChartClick} />
            )}
                </div>
            </div>
            </div>
            <div className="py-5">
                <span className="isolate inline-flex rounded-md shadow-sm">
                    <Link href="/" passHref>
                    <button
                        type="button"
                        className="relative inline-flex items-center rounded-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        <span>Back</span>
                    </button>
                </Link>
                </span>
            </div>
        </main>

    );
}

export default Page;

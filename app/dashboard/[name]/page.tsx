'use client'
import React, { useState, useEffect, Fragment } from 'react';
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
        <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white"> {decodeURI(params.name)}</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                 <div className="mx-10">
                 <div >
                 {isLoading ? (
                 <p>Loading charts...</p>
             ) : (
                 <Dashboard charts={charts} containerStyle={{backgroundColor: 'rgb(248 250 252)', padding: '15px'}} onClickDashboardItem={handleChartClick} />
             )}
                 </div>
             </div>
            </div>
          </div>
        </main>
      </div>

    );
}

export default Page;

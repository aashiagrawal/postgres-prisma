// 'use client'
import React, { useState, useEffect } from 'react';
import Barchart from './barchart';
import prisma from '@/lib/prisma';
import { LineChart } from 'recharts';
import Linechart from './linechart';

type ChartProps = {
    chartId: string | number;
    containerStyle?: React.CSSProperties;
};

type ChartData = {
    name: string;
    sqlQuery: string;
    type: string; // Assuming type is a string like 'Bar' or 'Line'
};

const Chart = ({ chartId, containerStyle }: ChartProps) => {
    // State to hold the chart data
    const [chart, setChart] = useState<ChartData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isBar, setBar] = useState(false);
    const [isLine, setLine] = useState(false);

    useEffect(() => {
        const fetchChart = async () => {
            console.log(`Fetching chart for chartId: ${chartId}`);
            try {
                const response = await fetch(`/api/chart/${chartId}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setChart(data); 
                if (data.type == "Bar") {
                    setBar(true);
                } else if (data.type == "Line") {
                    setLine(true);
                } else {
                    throw new Error("Chart type must be either Bar or Line!");
                }
            } catch (error) {
                console.error('Error fetching chart:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChart();
    }, [chartId]);


    // Render the chart data if it is available
    return (
        <div>
            {isLoading ? (
                <p>Loading chart...</p>
            ) : chart ? (
                <>  
                    <h3 className="my-2">{chart.name}</h3>
                    {isBar && <Barchart query={chart.sqlQuery} />}
                    {isLine && <Linechart query={chart.sqlQuery} />}
                </>
            ) : (
                <p>Chart data not available.</p>
            )}
        </div>
    );
    
};

export default Chart;

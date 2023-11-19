// 'use client'
import React, { useState, useEffect } from 'react';
import Barchart from './barchart';
import prisma from '@/lib/prisma';
import { LineChart } from 'recharts';
import Linechart from './linechart';
import Example from './modal';

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
    const [query, setQuery] = useState("");
    const [data, setData] = useState<any[]>([]);
    const [isBar, setBar] = useState(false);
    const [isLine, setLine] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [chartName, setName] = useState("");

    useEffect(() => {
        const fetchChart = async () => {
            try {
                const response = await fetch(`/api/chart/${chartId}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setChart(data); 
                setQuery(data.sqlQuery);
                setName(data.name);
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/query/${query}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const res = await response.json();
                console.log(res);
                setData(res); 
                
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [chart]);

    const handleChartClick = () => {
        setShowModal(!showModal);
    }
    // Render the chart data if it is available
    return (
        <div>
            {isLoading ? (
                <p>Loading chart...</p>
            ) : chart ? (
                <>  
                    <h3 className="my-2">{chart.name}</h3>
                    <div onClick={handleChartClick}>
                        {isBar && <Barchart queryData={data}/>}
                        {isLine && <Linechart queryData={data}/>}
                    </div>
                    {showModal && <Example chartType={chart.type} queryData={data} chartName={chartName}></Example>}
                </>
            ) : (
                <p>Chart data not available.</p>
            )}
        </div>
    );
    
};

export default Chart;

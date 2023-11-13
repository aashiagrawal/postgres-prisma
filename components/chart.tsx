// 'use client'
import React, { useState, useEffect } from 'react';

// const Chart = (params: { chartId: any; containerStyle: any }) => {
//     // const chartId = props.chartId
//     const containerStyle = params.containerStyle

//     const [chart, setChart] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchCharts = async () => {
//             const chartId = params.chartId;
//             console.log(`Fetching chart for chartid: ${chartId}`);
//             try {
//                 // Adjust the fetch call to match your API endpoint
//                 const response = await fetch(`/api/chart/${chartId}`);
//                 if (!response.ok) {
//                     throw new Error(`Error: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setChart(data);
//             } catch (error) {
//                 console.error('Error fetching chart:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCharts();
//     }, [params.chartId]);


//     return (
//         <div>{chart.name}</div>
//     )
// }

// export default Chart

const Chart = ({ chartId, containerStyle }) => {
    // State to hold the chart data
    const [chart, setChart] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                    <h3>{chart.name}</h3>
                    <p>ID: {chart.id}</p>
                    <p>Dashboard ID: {chart.dashboardId}</p>
                    <p>SQL Query: {chart.sqlQuery}</p>
                    <p>X Axis Field: {chart.xAxisField}</p>
                    <p>Y Axis Field: {chart.yAxisField}</p>
                </>
            ) : (
                <p>Chart data not available.</p>
            )}
        </div>
    );
};

export default Chart;

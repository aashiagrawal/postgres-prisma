// 'use client'
import React, {useEffect, useState} from 'react'
import {CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, ResponsiveContainer, Line} from 'recharts';

type BarchartProps = {
    query: string;
  };

const Linechart = ({ query }: BarchartProps) => {

    const [queryData, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
  }, [query]);

  console.log("this is query data: ", queryData);
  return (
    <div>
        {isLoading ? (
            <p>Loading data...</p>
        ) : queryData ? (
            <>
                <LineChart
                width={500}
                height={300}
                data={queryData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={queryData.length > 0 ? Object.keys(queryData[0])[0] : ''} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={queryData.length > 0 ? Object.keys(queryData[0])[1] : ''} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </>
        ) : (
            <p>Chart data not available.</p>
        )}
    </div>
  )
}

export default Linechart
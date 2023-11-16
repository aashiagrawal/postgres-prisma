// 'use client'
import React, {useEffect, useState} from 'react'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
// import { PrismaClient } from '@prisma/client';
type BarchartProps = {
  query: string;
};
const Barchart = ({ query }: BarchartProps) => {

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


  return (
    <div>
      {isLoading ? (
                <p>Loading data...</p>
            ) : queryData ? (
                <>
                  <BarChart width={500} height={250} data={queryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={queryData.length > 0 ? Object.keys(queryData[0])[0] : ''} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={queryData.length > 0 ? Object.keys(queryData[0])[1] : ''} fill="#8884d8" />
                  </BarChart>
                </>
            ) : (
                <p>Chart data not available.</p>
            )}
    </div>
  )
}

export default Barchart
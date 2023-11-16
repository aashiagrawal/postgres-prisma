// 'use client'
import React, {useEffect, useState} from 'react'
import {CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, ResponsiveContainer, Line} from 'recharts';

type BarchartProps = {
    queryData: any[];
  };

const Linechart = ({queryData }: BarchartProps) => {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(queryData);
      }, [queryData]);

  return (
    <div>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={data.length > 0 ? Object.keys(data[0])[0] : ''} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={data.length > 0 ? Object.keys(data[0])[1] : ''} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </div>
  )
}

export default Linechart
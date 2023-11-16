import React, {useEffect, useState} from 'react'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
type BarchartProps = {
  queryData: any[];
};
const Barchart = ({ queryData }: BarchartProps) => {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(queryData);
  }, [queryData]);

  return (
    <div>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={data.length > 0 ? Object.keys(data[0])[0] : ''} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={data.length > 0 ? Object.keys(data[0])[1] : ''} fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default Barchart
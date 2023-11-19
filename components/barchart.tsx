import React, {useEffect, useState} from 'react'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
type BarchartProps = {
  queryData: any[];
  propWidth?: number;
  propHeight?: number;
};
const Barchart = ({ queryData, propWidth = 500, propHeight = 250 }: BarchartProps) => {

  const [data, setData] = useState<any[]>([]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setData(queryData);
    setWidth(propWidth);
    setHeight(propHeight);
  }, [queryData]);

  return (
    <div>
      <BarChart width={width} height={height} data={data}>
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
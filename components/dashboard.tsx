import { DashboardItem } from "@/types/dashboardItem";
import React, {useState, useEffect} from "react";
import Chart from "./chart";

const Dashboard = (props: { name: string; containerStyle: any; onClickDashboardItem: any }) => {

    const dashName = props.name
    const containerStyle = props.containerStyle
    const onClickDashboardItem = props.onClickDashboardItem

    return (
        <div>
            <div className="flex items-center space-x-4">
                <div className="space-y-1">
                    <p className="font-medium leading-none">{dashName}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

// import React, { useState } from 'react';
// import Chart from './chart';
// import { DashboardItem } from '@/types/dashboardItem';

// interface DashboardProps {
//   name: string;
//   containerStyle: React.CSSProperties;
//   onClickDashboardItem: (dashboardItem: DashboardItem) => void;
// }

// const Dashboard: React.FC<DashboardProps> = ({ name, containerStyle, onClickDashboardItem }) => {
//   const [charts, setCharts] = useState<DashboardItem[]>([]);

// //   useEffect(() => {
// //     // Replace this URL with your actual endpoint
// //     const fetchUrl = `/api/dashboard/${name}`;

// //     const fetchDashboardData = async () => {
// //       try {
// //         const response = await axios.get<DashboardItem[]>(fetchUrl);
// //         setCharts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching dashboard data:', error);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, [name]);

//   return (
//     <div style={containerStyle}>
//       <div className="flex items-center space-x-4">
//         <div className="space-y-1">
//           <p className="font-medium leading-none">{name}</p>
//         </div>
//       </div>
//       <div>
//         {charts.map((chart) => (
//           <div key={chart.id} onClick={() => onClickDashboardItem(chart)}>
//             {/* <Chart chartData={chart} /> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

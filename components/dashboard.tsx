import React, {useState, useEffect} from "react";
import Chart from '@/components/chart';
import AITextBox from "./AITextBox";
import FormModal from "./FormModal";

type DashboardProps = {
    charts: any[];
    containerStyle: React.CSSProperties;
    onClickDashboardItem: (chartId: number) => void;
}

const Dashboard = ({ charts, containerStyle, onClickDashboardItem}: DashboardProps) => {

    const [showModal, setShowModal] = useState(false)
    const handleOnAddChartClick = () => {
        setShowModal(!showModal);
    }
    return (
        <div style={containerStyle}>
            <div>
                <AITextBox></AITextBox>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {charts.map(chart => (
                    <li key={chart.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="truncate text-sm font-medium text-gray-900 font-sans">{chart.name}</h3>
                                    <div onClick={() => onClickDashboardItem(chart.id)}>
                                        <Chart chartId={chart.id} containerStyle={{"backgroundColor": "white"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                <li className="flex w-full items-center  p-6">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3 justify-center">
                                <div className="text-3xl" onClick={handleOnAddChartClick}>
                                    +
                                </div>
                                {/* {showModal && <FormModal dashboardId={chart.}></FormModal>} */}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;

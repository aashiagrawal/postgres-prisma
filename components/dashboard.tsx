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


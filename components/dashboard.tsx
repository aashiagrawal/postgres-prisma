import React, {useState, useEffect} from "react";

const Dashboard = (props: { name: string; containerStyle: any; onClickDashboardItem: any }) => {

    const dashName = props.name
    const containerStyle = props.containerStyle
    const onClickDashboardItem = props.onClickDashboardItem

    return (
        <div>
            <div className="flex items-center space-x-2">
                <div className="space-y-1">
                    <p className="font-sans font-medium leading-none">{dashName}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard


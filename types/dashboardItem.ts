export interface DashboardItem {
    id: string;
    name: string;
    dashboardName: string;
    chartType: 'line' | 'bar';
    sqlQuery: string;
    xAxisField: string;
    yAxisField: string;
    data: any[];
  }
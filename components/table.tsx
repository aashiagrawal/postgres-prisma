import prisma from '@/lib/prisma'
import Dashboard from './dashboard'

export default async function Table() {
  const dashboards = await prisma.dashboard.findMany()

  console.log(dashboards)

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Dashboards</h2>
          <p className="text-sm text-gray-500">
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        {dashboards.map((dash) => (
          <div
            key = {dash.name}
            className="flex items-center justify-between py-3"
          >
            <Dashboard name={dash.name} containerStyle={"React.CSSProperties"} onClickDashboardItem={"none"}></Dashboard>
            {/* <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{dash.name}</p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

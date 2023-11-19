import prisma from '@/lib/prisma'
import Dashboard from './dashboard'
import Link from 'next/link'

export default async function Table() {
  const dashboards = await prisma.dashboard.findMany()

  console.log(dashboards)

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Select a Dashboard</h2>
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
            <Link href={`/dashboard/${dash.name}`}>{dash.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
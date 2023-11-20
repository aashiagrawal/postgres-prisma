import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="min-h-full">
        <div className="bg-gray-800 pb-24" />

        <main className="-mt-20">
          <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="mx-10">
                 <Suspense fallback={<TablePlaceholder />}>
                  <Table />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}

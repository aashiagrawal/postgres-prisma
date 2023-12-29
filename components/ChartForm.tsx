// import React from 'react'
import AITextBox from "./AITextBox"

export default function ChartForm() {
  return (
    <form>
      <div className="space-y-10">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add a chart</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill out the following form to add a chart.
          </p>
        </div>
        <div className="sm:col-span-4">
            <label htmlFor="chart-label" className="block text-sm font-medium leading-6 text-gray-900">
            Chart label
            </label>
            <div className="mt-2">
            <input
                id="chart-label"
                name="chart-label"
                type="chart-label"
                autoComplete="chart-label"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>
        </div>

        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="x-axis" className="block text-sm font-medium leading-6 text-gray-900">
                X-Axis label
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="x-axis"
                  id="x-axis"
                  autoComplete="x-axis"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="y-axis" className="block text-sm font-medium leading-6 text-gray-900">
                Y-Axis label
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="y-axis"
                  id="y-axis"
                  autoComplete="y-axis"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}


          </div>
        </div>
            <div className="sm:col-span-2">
              <label htmlFor="chart-type" className="block text-sm font-medium leading-6 text-gray-900">
                Type of chart
              </label>
              <div className="mt-2">
                <select
                  id="chart-type"
                  name="chart-type"
                  autoComplete="chart-type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Bar</option>
                  <option>Line</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
                <AITextBox></AITextBox>
            </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

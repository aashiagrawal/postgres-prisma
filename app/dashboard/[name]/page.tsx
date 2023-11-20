'use client'
import React, { useState, useEffect, Fragment } from 'react';
import { ChevronLeftIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Dashboard from '@/components/dashboard';


function Page({ params }: { params: { name: string } }) {
    const [charts, setCharts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const user = {
        name: 'Aashi Agrawal',
        email: 'aashia2@illinois.edu',
        imageUrl:
        'https://ca.slack-edge.com/T01J19MKHC7-U04P4SCMW2Z-b9ed9b30fe05-512',
      }
      const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Reports', href: '#', current: false },
      ]
      const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
      ]
      
      function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
      }


    useEffect(() => {
        const fetchCharts = async () => {
            const dashboardName = decodeURIComponent(params.name);
            console.log(`Fetching charts for dashboard: ${dashboardName}`);
            try {
                // Adjust the fetch call to match your API endpoint
                const response = await fetch(`/api/dashboard/${dashboardName}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setCharts(data);
            } catch (error) {
                console.error('Error fetching charts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharts();
    }, [params.name]);

    const handleChartClick = (chartId: number) => {
        console.log("Chart clicked:", chartId);
    };

    return (
        // <main className="relative flex min-h-screen flex-col items-center justify-center">
        //     <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        //         {decodeURI(params.name)}
        //     </h1>
        //     <div className="mx-10">
        //         <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg w-full "> 
        //         <div >
        //         {isLoading ? (
        //         <p>Loading charts...</p>
        //     ) : (
        //         <Dashboard charts={charts} containerStyle={{backgroundColor: 'lightgray', padding: '10px'}} onClickDashboardItem={handleChartClick} />
        //     )}
        //         </div>
        //     </div>
        //     </div>
            // <div className="py-5">
            //     <span className="isolate inline-flex rounded-md shadow-sm">
            //         <Link href="/" passHref>
            //         <button
            //             type="button"
            //             className="relative inline-flex items-center rounded-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            //         >
            //             <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            //             <span>Back</span>
            //         </button>
            //     </Link>
            //     </span>
            // </div>
        // </main>
        <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">

                          <Link href="/">
                            <img
                              className="h-12 w-12"
                              src="https://quill.co/_next/static/media/quill.c09d417a.svg"
                              alt="Quill"
                            />
                          </Link>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white"> {decodeURI(params.name)}</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                 <div className="mx-10">
                 <div >
                 {isLoading ? (
                 <p>Loading charts...</p>
             ) : (
                 <Dashboard charts={charts} containerStyle={{backgroundColor: 'rgb(248 250 252)', padding: '15px'}} onClickDashboardItem={handleChartClick} />
             )}
                 </div>
             </div>
            </div>
          </div>
        </main>
      </div>

    );
}

export default Page;

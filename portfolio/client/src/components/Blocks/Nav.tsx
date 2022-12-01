import React from 'react'

export const Nav = () => {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="hidden lg:flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        {/* <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span> 
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div> */}
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900 px-1">About me</a>

          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Tech Skills</a>

          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Projects</a>

          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Contact</a>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden">
          <div className="flex h-9 items-center justify-between">
            {/* <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              </a>
            </div> */}
            <div className="flex">
              {/* <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button> */}
            </div>
          </div>
          {/* <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">About me</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Tech Skills</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Projects</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Contact</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export const Header2 = () => {
  return (
    <div className="isolate bg-beige">

        <div className="px-6 pt-6 lg:px-8">
            <div className="bg-white ...">Header2</div>
        </div>

        <main>
        <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="text-gray-600">
                            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </div>
  )
}


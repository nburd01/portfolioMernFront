
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface Email {
  name:string,
  emailAdress: string,
  age: number,
  address: Address
}

interface Address {
  city: string,
  street: string,
}

export const Contact = () => {

  // type ButtonProps = {
  //   handleClick: () => void
  // }
  const [email, setEmail] = useState<Email | null >(null)
  // const [message, setMessage] = useState<{message: string}>({message: ''})

  const fetchUser = () => setEmail ({
    name:'Nially',
    emailAdress: 'niall@test.fr',
    age: 23,
    address: {
      city: "L'Hermitage",
      street: '9 rue anne de Bretagne'
    }
  })

  return (
    <section id='Contact'>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex h-screen bg-main_purple items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 id="#Contact" className="mt-6 text-center font-extrabold italic text-6xl md:text-9xl tracking-tight text-gray-900">
              Contact me
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                I'll be in touch 
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  // placeholder={email}
                  // value={email}


                  // onChange={(e) => setEmail(e.target.value) }
                />
              </div>
              <div>
              <label htmlFor="text" className="sr-only">
                Message
              </label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Message"
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value) }

                />
              </div>
            </div>
            <div>
              <button onClick={fetchUser}
                // type="submit"
                // className="bg-sky-500 hover:bg-sky-700 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                // handleClick={() => {
                //   console.log('button clicked')
                // }}
              >
                {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BeakerIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span> */}
                Send request
              </button>
              <p>{email && <p>{`Welcome ${email.name}`}</p> }</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

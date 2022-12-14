
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const defaultFormData = {
  email: "",
  message: "",
};

export const Contact = () => {
  
  const [formData, setFormData] = useState(defaultFormData);
  const {email, message} = formData;
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ 
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("formData", formData)
    setFormData(defaultFormData)
  }

  return (
    <section id='Contact'>

      <div className="flex h-screen bg-main_purple items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>

            <h2 id="#Contact" className="mt-6 text-center font-extrabold italic text-6xl md:text-9xl tracking-tight text-gray-900">
              Contact me
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                I'll be in touch 
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Message"
                  value={message}
                  onChange={onChange}

                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-700 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BeakerIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Send request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}
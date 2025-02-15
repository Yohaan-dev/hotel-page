import React from 'react'

const GetQuotePage = () => {
  return (
    <section className="bg-blue-950 flex items-center justify-center">
      <form className="px-6 max-w-full mx-auto pt-8 space-y-4">
        <h1 className="text-white text-3xl font-semibold">Fill The Form</h1>
        <p className="text-white text-2xl">This is our Form</p>
        <div className="md:flex-col sm:flex-row flex-wrap md:flex-nowrap sm:space-y-4 gap-6">
        <div className="w-full md:w-full space-y-3">
          <label htmlFor="firstname" className="text-gray-50">First Name:</label>
          <input className="block py-2 px-4 border border-blue-200 rounded w-full focus:outline-none focus:border-green-500" type="text" name="firstname" id="firstname" />
        </div>
        <div className="w-full md:w-full space-y-3">
          <label htmlFor="lastname" className="text-gray-50">Last Name:</label>
          <input className="block py-2 px-4 border border-blue-200 rounded w-full focus:outline-none focus:border-green-500" type="text" name="lastname" id="lastname" />
        </div>
        </div>
        <div className="w-full md:w-full space-y-3">
          <label htmlFor="email" className="text-gray-50">Email:</label>
          <input className="block py-2 px-4 border border-blue-200 rounded w-full focus:outline-none focus:border-green-500" type="text" name="email" id="email" placeholder="your@email.com" />
        </div>
        <div className="w-full md:w-full space-y-3">
          <label htmlFor="message" className="text-gray-50">Message:</label>
          <textarea className="block py-2 px-4 border border-blue-200 rounded w-full focus:outline-none focus:border-green-500" type="message" name="message" id="message" placeholder="say hi..."></textarea>
        </div>
        <button className="py-3">
          <a className="p-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-300 hover:text-black uppercase" href="/getquote.html">Send</a>
        </button>
      </form>
    </section>
  )
}

export default GetQuotePage
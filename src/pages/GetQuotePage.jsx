import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const GetQuotePage = ({AddDetailsSubmit}) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const newDetails = {
      title,
      type,
      description,
      location,
      contactEmail,
      contactPhone,
    }

    AddDetailsSubmit(newDetails)

    toast.success('Details Added Successfully')

    return navigate('/About')
  }

  return (
    <section className="bg-blue-950">
      <div className="container mx-auto max-w-3xl py-10">
        <div className="bg-blue-850 px-4 py-8 shadow-md rounded-md">
        <form onSubmit={submitForm}>
            <h1 className="text-3xl font-semibold text-white">Add Details.</h1>
            <div className="mb-4">
          <label htmlFor="title" className="text-white text-lg">Title:</label>
            <input type="text" className="block rounded p-2 px-4 w-full md:w-1/2 focus:outline-none cursor-pointer" name="name" placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </div>
  
        <div className="mb-4">
          <label htmlFor="type" className="text-white text-lg">Type:</label>
            <input type="text" className="block rounded p-2 px-4 w-full md:w-1/2 focus:outline-none cursor-pointer" name="name" placeholder="Type"
             value={type}
             onChange={(e) => setType(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-white text-lg">Description:</label>
          <textarea name="message" className="block rounded p-2 py-4 w-full md:w-1/2 focus:outline-none cursor-pointer" id="message" placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="text-white text-lg">Location:</label>
            <input type="text" className="block rounded p-2 px-4 w-full md:w-1/2 focus:outline-none cursor-pointer" name="name" placeholder="Location"
             value={location}
             onChange={(e) => setLocation(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="contact-email" className="text-white text-lg">ContactEmail:</label>
            <input type="text" className="block rounded p-2 px-4 w-full md:w-1/2 focus:outline-none cursor-pointer" name="name" placeholder="contactEmail"
             value={contactEmail}
             onChange={(e) => setContactEmail(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="contact-phone" className="text-white text-lg">contactPhone:</label>
            <input type="text" className="block rounded p-2 px-4 w-full md:w-1/2 focus:outline-none cursor-pointer" name="name" placeholder="ContactPhone"
             value={contactPhone}
             onChange={(e) => setContactPhone(e.target.value)}
            />
        </div>
        <div>
          <button className=" bg-blue-600 text-white hover:bg-blue-300 hover:text-black rounded p-2 px-4 focus-outline:none cursor-pointer">Add Details</button>
        </div>
      </form>
        </div>
      </div>
    </section>
  )
}

export default GetQuotePage
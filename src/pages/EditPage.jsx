import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-toastify'

const EditPage = ({ EditDetailsSubmit }) => {
    const jobs = useLoaderData()
      const [title, setTitle] = useState(jobs.title)
      const [type, setType] = useState(jobs.type)
      const [description, setDescription] = useState(jobs.description)
      const [location, setLocation] = useState(jobs.location)
      const [contactEmail, setContactEmail] = useState(jobs.contactEmail)
      const [contactPhone, setContactPhone] = useState(jobs.contactPhone)
    
    const {id} = useParams()
  
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
    
        const EditDetails = {
          id,  
          title,
          type,
          description,
          location,
          contactEmail,
          contactPhone,
        }
    
        EditDetailsSubmit(EditDetails)
    
        toast.success('Details Edited Successfully')
    
        return navigate(`/About/${id}`)
      }

  return (
    <section className="bg-blue-950">
    <div className="container mx-auto max-w-3xl py-10">
      <div className="bg-blue-850 px-4 py-8 shadow-md rounded-md">
      <form onSubmit={submitForm}>
          <h1 className="text-3xl font-semibold text-white">Edit Details.</h1>
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
        <button className=" bg-blue-600 text-white hover:bg-blue-300 hover:text-black rounded p-2 px-4 focus-outline:none cursor-pointer">Edit Details</button>
      </div>
    </form>
      </div>
    </div>
  </section>
  )
}

export default EditPage
import React from 'react'
import { useState } from 'react'

const Testimonies = ({job}) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  return (
    <div
    className="flex flex-col bg-gray-600 p-4 rounded-lg shadow-md space-y-4 w-full md:w-80"
  >
    
    {/* Title & Type */}
    <div className="text-center">
      <h1 className="text-lg font-semibold text-white">{job.title}</h1>
      <h2 className="text-sm text-blue-200">{job.type}</h2>
    </div>
    
    {/* Description */}
    <p className="text-gray-300 text-sm text-center">
      {description}
          </p>
          
          {/* onClick Button Showing Full Description */}
      <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-blue-200 focus:outline-none hover:text-blue-400">{showFullDescription ? 'Less' : 'More'}</button>
      
      {/* Read More */}
      <a href={`/about/${job.id}`} className="bg-blue-600 text-white px-4 p-2 rounded-lg focus:outline-none text-center hover:bg-blue-900 hover:text-white">Read More</a>
  </div>
  )
}

export default Testimonies
import React from 'react'
import { useState } from 'react'

const Testimonies = ({job, image, index}) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  return (
    <div
    className="flex flex-col bg-gray-600 p-4 rounded-lg shadow-md space-y-4 w-full md:w-80"
  >
    {/* Image Container */}
    <div className="flex justify-center">
      <img
        className="w-32 h-32 rounded-full object-cover"
        src={image} // Use the image variable
        alt={`Job Image ${index + 1}`}
      />
    </div>
    
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
          <button onClick={()=> setShowFullDescription((prevState)=> !prevState)} className="bg-blue-900 text-white rounded-lg px-3 p-2 focus:outline-none cursor-pointer hover:bg-blue-400">{showFullDescription ? 'Less':'More'}</button>
  </div>
  )
}

export default Testimonies
import React from 'react'
import jobs from '../jobs.json'
import Testimonies from './Testimonies'

const Testimony = () => {
  return (
    <section className="flex flex-wrap justify-center gap-4 bg-blue-950 p-4 pt-8">
      {jobs.map((job) =>
        Object.values(job.images).map((image, index) => (
         <Testimonies key={`${job.id}-${index}`} job= {job} image= {image} index= {index} />
        ))
      )}
    </section>
  );
};

export default Testimony
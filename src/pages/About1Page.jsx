import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

const About1Page = ({ deleteDetails }) => {
    const { id } = useParams()
    const jobs = useLoaderData()
    const navigate = useNavigate()

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('You want to delete this file?')

        if (!confirm) return;

        deleteDetails(jobId)

        toast.success('Details Deleted Successfully')

        navigate('/About')
    }

    return (
        <section className="bg-blue-950 items-center justify-center">
            <div className="container items-center mx-auto px-6 py-4 ">
                <Link className="text-blue-400 flex items-center hover:text-blue-300" to="/about"><FaArrowLeft className="mr-2" />Click to back</Link>
            </div>

            <div className="container max-w-3xl items-center flex flex-col md:flex-row md:space-x-3 space-y-3 mx-auto">
                <div className="flex flex-col mx-auto px-4 py-3">
                    <h1 className="text-white text-3xl pb-3">{jobs.title}</h1>
                    <p className="text-white text-xl pb-3">{jobs.type}</p>
                    <p className="text-white">{jobs.description}</p>
                    <div className="flex items-center space-x-2 pt-3">
                    <FaMapMarker className="mr-2 text-blue-400" /><p className="text-blue-400 py-2 cursor-pointer">{jobs.location}</p>
                    </div>
                    <p className="text-white text-xl py-3">Contact Email:</p>
                    <p className="text-blue-600 bg-slate-400 rounded px-6 p-2 cursor-pointer w-full">{jobs.contactEmail}</p>
                    <p className="text-white text-xl py-3">Contact Phone:</p>
                    <p className="text-blue-600 bg-slate-400 rounded px-6 p-2 cursor-pointer w-full">{jobs.contactPhone}</p>
                    <Link
                  to={`/edit-job/${jobs.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Details
                    </Link>
                    <button
                  onClick={() => onDeleteClick(jobs.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Details
                </button>
                </div>
            </div>
        </section>
  )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return(data)
}

export { About1Page as default, jobLoader }
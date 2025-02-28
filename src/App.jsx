import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import About1Page, {jobLoader} from './pages/About1Page'
import ServicePage from './pages/ServicePage'
import GetQuotePage from './pages/GetQuotePage'
import NotFoundPage from './pages/NotFoundPage'
import EditPage from './pages/EditPage'


const App = () => {
  // Add Details
  const AddDetails = async(newDetails) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDetails)
    })
    return;
  }

  //Delete Details
  const deleteDetails = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
  }
  
  //Edit Details
  const EditDetails = async (jobs) => {
    const res = await fetch(`/api/jobs/${jobs.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobs)
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage isHome={true} />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/About/:id' element={<About1Page deleteDetails={deleteDetails} />} loader={jobLoader} />
        <Route path='/Edit-job/:id' element={<EditPage  EditDetailsSubmit={EditDetails} />} loader={jobLoader} />
        <Route path='/Service' element={<ServicePage />} />
        <Route path='/get-a-quote' element={<GetQuotePage AddDetailsSubmit={AddDetails} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
import { useState, useEffect } from 'react';
import React from 'react';
import Testimonies from './Testimonies';
import Spinner from './Spinner';

const Testimony = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-4 bg-blue-950 p-4 pt-8">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
            {jobs.map((job) => (
            <Testimonies key={job.id} job={job} />
          ))}
        </>
      )}
    </section>
  );
};

export default Testimony;

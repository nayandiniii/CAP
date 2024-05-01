import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "./actions/jobActions";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const [filters, setFilters] = useState({
    minExperience: 0,
    company: "",
    location: "",
    remote: false,
    techStack: "",
    role: "",
    minBasePay: 0,
  });

  useEffect(() => {
    dispatch(fetchJobs({ limit: 10, offset: 0 }));
  }, [dispatch]);

  const loadMoreJobs = () => {
    dispatch(fetchJobs({ limit: 10, offset: jobs.length }));
  };

  const applyFilters = () => {
    dispatch(fetchJobs({ ...filters, limit: 10, offset: 0 }));
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Candidate Application Platform</h1>
      </header>
      <div className="app-container">
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onApplyFilters={applyFilters}
        />
        <div className="job-list">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          <div className="load-more" onClick={loadMoreJobs}>
            Load More
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

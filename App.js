// App.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import JobCard from "./Card";
import "./App.css"; // Import the CSS file

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              limit: 10,
              offset: 0,
            }),
          }
        );
        const data = await response.json();
        // Add unique 'id' to each job object
        const jobsWithIds = data.jobs.map((job, index) => ({ ...job, id: index + 1 }));
        dispatch({ type: "FETCH_JOBS_SUCCESS", payload: jobsWithIds });
      } catch (error) {
        dispatch({ type: "FETCH_JOBS_FAILURE", payload: error.message });
      }
    };

    fetchJobs();
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;

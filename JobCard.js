// JobCard.js
import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const { title, company, location, description, experience, applyLink } = job;

  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{location}</p>
      <p>{description}</p>
      <p>Experience: {experience}</p>
      <a href={applyLink} target="_blank" rel="noopener noreferrer">
        Apply
      </a>
    </div>
  );
};

export default JobCard;

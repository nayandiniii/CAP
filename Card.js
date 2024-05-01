// Card.js

import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const JobCard = ({ job }) => {
  // eslint-disable-next-line
  const { id, title, company, location, description, experience, applied } = job;

  const handleApply = () => {
    // Logic to handle applying for the job (e.g., dispatch an action to update state)
    console.log("Applying for job:", title);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {company} - {location}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography color="textSecondary">
          Experience Required: {experience}
        </Typography>
        <Button
          variant="contained"
          color={applied ? "secondary" : "primary"}
          onClick={handleApply}
        >
          {applied ? "Applied" : "Apply"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;

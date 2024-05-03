import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCandidatesRequest } from './actions';
import './CandidateList.css'; // Import your CSS file

const CandidateList = ({ candidates, loading, error, fetchCandidates }) => {
  useEffect(() => {
    fetchCandidates();
  }, []);

  console.log('Candidates:', candidates); // Log candidates array to console

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Add null checks for candidates and candidates.jdList
  return (
    <div className="card-container">
      {candidates && candidates.jdList && candidates.jdList.map(candidate => (
        <div key={candidate.jdUid} className="card">
          <h3>{candidate.jobRole}</h3>
          <p>{candidate.jobDetailsFromCompany}</p>
          <p>Location: {candidate.location}</p>
          <p>Salary: {candidate.minJdSalary} - {candidate.maxJdSalary} {candidate.salaryCurrencyCode}</p>
          <p>Experience: {candidate.minExp} - {candidate.maxExp} years</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  candidates: state.candidates,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  fetchCandidates: fetchCandidatesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateList);

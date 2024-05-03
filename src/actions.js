// actions.js
export const FETCH_CANDIDATES_REQUEST = 'FETCH_CANDIDATES_REQUEST';
export const FETCH_CANDIDATES_SUCCESS = 'FETCH_CANDIDATES_SUCCESS';
export const FETCH_CANDIDATES_FAILURE = 'FETCH_CANDIDATES_FAILURE';

export const fetchCandidatesRequest = () => ({
  type: FETCH_CANDIDATES_REQUEST
});

export const fetchCandidatesSuccess = (data) => ({
  type: FETCH_CANDIDATES_SUCCESS,
  payload: data // Assuming 'jdList' contains the list of candidates
});

export const fetchCandidatesFailure = (error) => ({
  type: FETCH_CANDIDATES_FAILURE,
  error: error
});

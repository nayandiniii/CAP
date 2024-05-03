// reducers.js
import { FETCH_CANDIDATES_REQUEST, FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_FAILURE } from './actions';

const initialState = {
  candidates: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_REQUEST:
      console.log("Reducer called")
      return { ...state, loading: true, error: null };
    case FETCH_CANDIDATES_SUCCESS:
      return { ...state, loading: false, candidates: action.payload, error: null };
    case FETCH_CANDIDATES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CandidateList from './CandidateList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Candidate Details</h1>
        <CandidateList />
      </div>
    </Provider>
  );
};

export default App;

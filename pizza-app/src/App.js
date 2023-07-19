import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Link to="/" >sfhnsifs</Link>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <Route exect path="/"></Route>
        </div>
      </div>
    </div>
  );
}

export default App;

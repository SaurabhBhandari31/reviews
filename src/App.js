import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js//bootstrap.bundle';
import Review from './Component/Review';
 

function App() {
  return (
    <>
      <div className="container"> 
      <h1 className="text-center mt-5 text-white">Client Reviews</h1>
      </div>
      <Review/>
    </>
  );
}

export default App;

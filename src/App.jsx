import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setcount] = useState(0);
  const handleRefresh = () => {
    let oldCount = JSON.parse(localStorage.getItem('count'))
    setcount(oldCount);
  }

  const handleIncrement = () => {
    let newCount = count + 1;
    localStorage.setItem('count', JSON.stringify(newCount));
    setcount(newCount);
  }
  const handleDecrement = () => {
    let latestCount = count - 1;
    localStorage.setItem('count', JSON.stringify(latestCount));
    setcount(latestCount);
  }
  const handleReset=()=>{
    let resate = 0;
    localStorage.setItem('count', JSON.stringify(reset));
    setcount(reset);
  }
  useEffect(() => {
    handleRefresh();
  }, [])
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="ct p-5 rounded shadow text-center text-white">
          <h1 className="mb-4">Counter</h1>
            <span className="fs-3 fw-bold">{count}</span>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <button className="btn  btn-outline-light fs-2 " onClick={handleDecrement}>-</button>
            <button className="btn  btn-light fs-5 " onClick={handleReset}>Reset</button>

            <button className="btn btn-outline-light fs-2 " onClick={handleIncrement}>+</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default App

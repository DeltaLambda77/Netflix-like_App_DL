import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import movieDataFile from './../data.json';

import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect (() => {
    setMovieData(movieDataFile);
    
  }, []);

  return (
    <>
      <div>
        <Sidebar />
        <Outlet context={[movieData, setMovieData]} />
      </div>
    </>
  )
}

export default App

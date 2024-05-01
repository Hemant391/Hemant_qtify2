import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HomePage from './pages/HomePage/HomePage';
import { fetchNewAlbums,fetchTopAlbums,fetchSongs } from './api/api';
import React,{ useEffect, useState } from 'react';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {Outlet} from 'react-router-dom';



function App() {
  const [data,setData]=useState({});

const getData = (key,source) =>{
  source().then(data=>{
    setData((prev)=>{
      return {...prev,[key]:data};
    })
  })
};

useEffect(()=>{
  getData('topAlbums',fetchTopAlbums);
  getData('newAlbums',fetchNewAlbums);
  getData('songs',fetchSongs);
},[])

  const {topAlbums=[],newAlbums=[],songs=[]}=data;

  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Outlet context ={{data:{topAlbums, newAlbums,songs}}} />

    </StyledEngineProvider>
    
    </>
  );
}

export default App;

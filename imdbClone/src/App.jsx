import './App.css'
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from './components/watchList';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  let [watchList,setwatchList]=useState([])
  let  handleAddtoWatchlist=(movieObj)=>{
    let newwatchList=[...watchList,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newwatchList))
    setwatchList(newwatchList)
    console.log(newwatchList)
  }
  let handleRemoveFromWatchList=(movieObj)=>{
    let filteredWatchList=watchList.filter((movie)=>{ return movie.id!==movieObj.id})
    setwatchList(filteredWatchList)
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchList)
  }
  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setwatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path='/' element={<><Banner/><Movies watchList={watchList} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>} />
     <Route path='/watchList' element={<WatchList watchList={watchList} setwatchList={setwatchList}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

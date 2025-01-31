import './App.css'
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from './components/WatchList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  let [watchList,setwatchList]=useState([])
  let  handleAddtoWatchlist=(movieObj)=>{
    let newwatchList=[...watchList,movieObj]
    setwatchList(newwatchList)
    console.log(newwatchList)
  }
  let handleRemoveFromWatchList=(movieObj)=>{
    let filteredWatchList=watchList.filter((movie)=>{ return movie.id!==movieObj.id})
    setwatchList(filteredWatchList)
    console.log(filteredWatchList)
  }
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path='/' element={<><Banner/><Movies watchList={watchList} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>} />
     <Route path='/WatchList' element={<WatchList/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

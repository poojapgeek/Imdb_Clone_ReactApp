import React from 'react'
import MovieCard from './MovieCard'
import {useEffect} from 'react'
import axios from 'axios'
import {useState} from 'react'
import Pagination from './Pagination'
function Movies({handleAddtoWatchlist,handleRemoveFromWatchList,watchList}) {
  const [movies,setMovies]=useState([])
  const [pageNo,setpageNo]=useState(1)
  const handlePrev=()=>{
    if(pageNo==1){
      setpageNo(pageNo)
    }
    else{
      setpageNo(pageNo-1)
    }
    
  }
  const handleNext=()=>{
    setpageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-5'><div className='text-2xl m-5 font-bold text-center'>Trending Movies</div>    
    <div className='flex flex-row flex-wrap justify-around gap-8'>
      {movies.map((movieObj)=>{
    return <MovieCard key={movieObj.id} movieObj={movieObj} name={movieObj.original_title}  poster_path={movieObj.poster_path} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
      })}
      
      
    </div>
    <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo}/>
    </div>

  )
}

export default Movies
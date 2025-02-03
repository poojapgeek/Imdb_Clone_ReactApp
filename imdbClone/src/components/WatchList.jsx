import React,{useEffect, useState} from 'react'
import genreids from '../Utility/genre'

function watchList({watchList,setwatchList,handleRemoveFromWatchList}) {
  const [search,setSearch]=useState('')
  const [genreList,setGenreList]=useState(['All Genres'])
  const [currGenre,setCurrGenre]=useState('All Genres')
  let handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  let handleFilter=(genre)=>{

    setCurrGenre(genre)
  }
  let sortIncreasing=()=>{
   let sortedIncreasing= watchList.sort((movieA,movieB)=>{
      return  movieA.vote_average - movieB.vote_average
    })
    setwatchList([...sortedIncreasing])
  }
  let sortDecreasing=()=>{
   let sortedDecreasing= watchList.sort((movieA,movieB)=>{
      return  movieB.vote_average - movieA.vote_average
    })
    setwatchList([...sortedDecreasing])
  }
  useEffect(()=>{
    let temp =watchList.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setGenreList(['All Genres',...temp])
    console.log(temp)
  },[watchList])
  return (
   
    <>
    <div className='flex justify-center flex-wrap m-4'>
      {genreList.map((genre)=>{
      return  <div onClick={()=>handleFilter(genre)} className={currGenre==genre?'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4:':'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4'}>{genre}</div>
      })}
      
      
      
      

    </div>
    <div className='flex justify-center my-4'> <input onChange={handleSearch} value={search} type='text' placeholder='Search for movies'className='h-[3rem] w-[18rem] border border-gray-10px bg-gray-200'/></div>
    <div className='overflow-hidden rounded-lg border border-gray-200 m-4'>
      <table className='w-full text-gray-500'>
        <thead className='border-b-2'>
          <tr>
            <th>Movie</th>
            <th className='flex gap-3 justify-center'><div onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></div><div>Ratings</div><div  onClick={sortDecreasing}><i class="fa-solid fa-arrow-down"></i></div></th>
             
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
{watchList.filter((movieObj)=>{
  if(currGenre=='All Genres'){
    return true
  }else{
      return genreids[movieObj.genre_ids[0]]==currGenre
  }
}).filter((movieObj)=>{
  return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
}).map((movieObj)=>{
  return <tr className='border-b-2 text-center'>
  <td className='flex items-center py-4 px-6'>
    <img className='h-[9rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
    <div className='mx-10'>{movieObj.title}</div></td>
    <td>{movieObj.vote_average}</td>
    <td>{movieObj.popularity}</td>
    <td>{genreids[movieObj.genre_ids[0]]}</td>
    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-400'>Delete</td>
    </tr>
})}

          
              </tbody>
              </table>
              </div>
              </>
  )
}

export default watchList
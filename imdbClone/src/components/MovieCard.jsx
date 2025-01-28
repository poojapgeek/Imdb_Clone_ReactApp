import React from 'react'

function MovieCard({poster_path,name}) {
  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
    <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60 '>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
// https://api.themoviedb.org/3/person/popular?api_key=904882b0bd89282ea0656766bcb76474&language=en-US&page=2
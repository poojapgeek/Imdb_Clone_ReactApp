import React from 'react'

function watchList({watchList}) {
  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'>Action</div>
      
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold'>Action</div>
      

    </div>
    <div className='flex justify-center my-4'> <input type='text' placeholder='Search for movies'className='h-[3rem] w-[18rem] border border-gray-10px bg-gray-200'/></div>
    <div className='overflow-hidden rounded-lg border border-gray-200 m-4'>
      <table className='w-full text-gray-500'>
        <thead className='border-b-2'>
          <tr>
            <th>Movie</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
{watchList.map((movieObj)=>{
  return <tr className='border-b-2 text-center'>
  <td className='flex items-center py-4 px-6'>
    <img className='h-[9rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
    <div className='mx-10'>{movieObj.title}</div></td>
    <td>{movieObj.vote_average}</td>
    <td>{movieObj.popularity}</td>
    <td>Action</td>
    <td className='text-red-400'>Delete</td>
    </tr>
})}

          
              </tbody>
              </table>
              </div>
              </>
  )
}

export default watchList
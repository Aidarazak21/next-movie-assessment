'use client'

import { useMovies } from "@/contexts"


export default function Home() {
  const {movies,loading} = useMovies()

  if (loading){
    return 'loading...'
  }

  return (
    <div>
      <ul>{
        movies?.map((movie) => <li key={movie.Movie_ID} >{movie.Title}</li>)
        }</ul>
    </div>
  )
}

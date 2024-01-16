'use client'

import { useMovies } from "@/contexts"
import Link from "next/link"


export default function MoviesIndexPage() {
  const {movies,loading} = useMovies()

  if (loading){
    return 'loading...'
  }

  return (
    <div>
      <ul>{
        movies?.map((movie) => <li key={movie.Movie_ID} >
          <Link href={`/movies/${movie.Movie_ID}`}>
          {movie.Title}</Link></li>)
        }</ul>
    </div>
  )
}

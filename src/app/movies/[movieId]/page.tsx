'use client'

import { useMovies } from "@/contexts"


export default function MovieDetailPage({params}: {params: {movieId: string}}) {
  const {movies,loading} = useMovies()
  const {movieId} = params
  const currentMovie = movies?.find((movie) => movie.Movie_ID.toString() === movieId)
  if (loading){
    return 'loading...'
  }
  if (!currentMovie){
    return 'Not found.'
  }

  return (
    <div>
     {JSON.stringify(currentMovie)}
    </div>
  )
}

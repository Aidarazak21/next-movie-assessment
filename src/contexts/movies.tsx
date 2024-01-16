'use client'; 

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Movie, getMovies } from '@/lib';

export const MoviesContext = createContext<{
  movies: Movie[]; //data
  loading: boolean;
}>({
  movies: [], //return data
  loading: true,
});

export const useMovies = () => useContext(MoviesContext); // hook to retrieve movies data and loading state 

//provider for movies context
export const MoviesProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  return <MoviesContext.Provider value={{ movies, loading }}>{children}</MoviesContext.Provider>;
};
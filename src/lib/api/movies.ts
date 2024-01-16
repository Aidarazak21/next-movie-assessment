export type Movie = {
    Movie_ID: number;
    Title: string;
    Genre: string;
    Duration: string;
    Views: string;
    Poster: string;
    Overall_rating: number;
    Description: string;
  };

export const getMovies = async () => {
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };

    const response = await fetch(
        'https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01',
        requestOptions
    );
const result: { data: Movie[]} = await response.json();
return result.data;
}
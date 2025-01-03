const API_KEY = "b23c258d";
const BASE_URL = "https://www.omdbapi.com";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/?s=movie&type=movie&apikey=${API_KEY}&page=1`);
  const data = await response.json();
return data.Search; 
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/?s=${encodeURIComponent(query)}&type=movie&apikey=${API_KEY}`);
  const data = await response.json();
return data.Search; 
}

//----------------------
// const API_KEY = "b23c258d";
// const BASE_URL = "https://www.omdbapi.com";

// export const getPopularMovies = async () => {
//   const response = await fetch(`${BASE_URL}/?s=movie&type=movie&apikey=${API_KEY}&page=1`);
//   const data = await response.json();
// return data.Search; 
// }

// export const searchMovies = async (query) => {
//   const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
//  //const URL = 'https://omdbapi.com/?s=${searchTerm}&page=18apikey=fc1fef96';
//   //http://www.omdbapi.com/?s={query}&apikey=b23c258d
//   const data = await response.json();
// return data.Search; 
// }
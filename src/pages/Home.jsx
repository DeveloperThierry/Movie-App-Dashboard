import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import "../css/Home.css"
import {searchMovies, getPopularMovies} from "../services/api.js"


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        setError("Failed to load movies")
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return 
    if (loading) return
    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    }catch(err){
      console.log(err)
      setError("Failed to search movies")
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for a movie" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? <div>Loading...</div> :  
      <div className="movies-grid">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
      </div>
        }
    </div>
  )
}

export default Home;
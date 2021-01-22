const API_KEY = "eb438ce3739bdeeac3e16e89b163cfbd";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,

}

export default requests;
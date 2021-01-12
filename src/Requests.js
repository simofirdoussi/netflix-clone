const API_KEY = "eb438ce3739bdeeac3e16e89b163cfbd";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
}

export default requests;
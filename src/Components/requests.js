const KEY = 'd1147a32dd1a7134927b352bd3bbccde'
const requests = {
    netflexOriginal: `/discover/tv?api_key=${KEY}&with_networks=213`,
    trending: `/trending/all/week?api_key=${KEY}&language=en-US`,
    topRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
    Action: `/discover/movie?api_key=${KEY}&with_genres=28`,
    commedy: `/discover/movie?api_key=${KEY}&with_genres=35`,
    horror: `/discover/movie?api_key=${KEY}&with_genres=27`,
    romance: `/discover/movie?api_key=${KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${KEY}&with_genres=99`
}
export default requests

// https://api.themoviedb.org/3/discover/tv?api_key=d1147a32dd1a7134927b352bd3bbccde&with_networks=213
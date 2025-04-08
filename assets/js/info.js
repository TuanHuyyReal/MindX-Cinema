import { TMDB_API_KEY } from "./config.js";

(async () => {
  // make a hero banner for info page introducing about a film that was on the banner of index html

  const HomeAPIRoutes = {
    "Trending Movies": { url: "/trending/movie/week" },
    "Popular Movies": { url: "/movie/popular" },
    "Top Rated Movies": { url: "/movie/top_rated" },
    "Now Playing at Theatres": { url: "/movie/now_playing" },
    "Upcoming Movies": { url: "/movie/upcoming" },
  };

  const promises = await Promise.all(
    Object.keys(HomeAPIRoutes).map(
      async (item) =>
        await (
          await fetch(
            `https://api.themoviedb.org/3${HomeAPIRoutes[item].url}?api_key=${TMDB_API_KEY}`
          )
        ).json()
    )
  );

  const data = promises.reduce((final, current, index) => {
    final[Object.keys(HomeAPIRoutes)[index]] = current.results;
    return final;
  }, {});

  document
    .querySelector("img#hero-image")
    .setAttribute("id", data[localStorage.getItem("movie-id")]);
})();

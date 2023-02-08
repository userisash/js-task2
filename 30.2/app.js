const searchButton = document.getElementById("search-button");
const movieNameInput = document.getElementById("movie-name-input");
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const year = document.getElementById("year");
const plot = document.getElementById("plot");
const director = document.getElementById("director");
const actors = document.getElementById("actors");
const imdbRating = document.getElementById("imdb-rating");
const rottenTomatoesRating = document.getElementById("rotten-tomatoes-rating");
const metacriticRating = document.getElementById("metacritic-rating");

const search = function() {
  const movieName = movieNameInput.value;

  fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=1f360f9e`)
    .then(response => response.json())
    .then(data => {
      poster.src = data.Poster;
      title.innerText = data.Title;
      genre.innerText = "Genre: " + data.Genre;
      year.innerText = "Year: " + data.Year;
      plot.innerText = "Plot: " + data.Plot;
      director.innerText = "Director: " + data.Director;
      actors.innerText = "Actors: " + data.Actors;
      imdbRating.innerText = "IMDB Rating: " + data.imdbRating;
      rottenTomatoesRating.innerText = "Rotten Tomatoes Rating: " + data.Ratings[1].Value;
      metacriticRating.innerText = "Metacritic Rating: " + data.Ratings[2].Value;
    });
};

searchButton.addEventListener("click", search);

movieNameInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    search();
  }
});

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function() {
  movieNameInput.value = "";
});

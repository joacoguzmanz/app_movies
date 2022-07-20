const movies = require('./personal_modules/movies');

const moviesDH = {
  listMovies: () => {
    movies.forEach((movie) => {
      console.log(`- ${movie.title}`);
    });
  },

  searchMovie: (id, title) => {
    let moviesArr = movies.filter(
      (movie) => movie.id === id || movie.title === title
    );

    return moviesArr.length >= 1 ? moviesArr : null;
  },

  searchMovieByGenre: (genre) => {
    let moviesArr = movies.filter((movie) => movie.genre === genre);

    return moviesArr.length >= 1 ? moviesArr : null;
  },

  totalPrice: () => {
    let pricing = movies.reduce((acum, movie) => acum + movie.price, 0);

    return pricing;
  },

  changeMovieGenre: (id, genre) => {
    let newArr = moviesDH.searchMovie(id, ' ');
    newArr[0].genre = genre;
    return newArr;
  },
};

// moviesDH.listMovies();
// console.log(moviesDH.searchMovie(10, ' '));
// console.log(moviesDH.searchMovieByGenre('Romantica'));
// console.log(moviesDH.totalPrice());
console.log(moviesDH.changeMovieGenre(2, 'Aventura'));

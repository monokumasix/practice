const numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMoviesDB {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцените?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцените?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB[c] = d;

console.log(personalMoviesDB);






'use strict';

/*
var numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
document.write("Сколько фильмов вы посмотрели? " + numberOfFilms);

var personalMovieDB = {
    count: 'numberOfFilms',
    movies: '',
    actors: '',
    genres: '',
    privat: false
};
*/

// как должно быть

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
